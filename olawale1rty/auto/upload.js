const multer = require('multer');
const path   = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();

const ID = process.env.ID;
const SECRET = process.env.SECRET;
const BUCKET_NAME = process.env.BUCKET_NAME;

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const s3Stream = require("s3-upload-stream")(s3);
// const uploadFile = (fileName) => {
//     // Read content from the file
//     const fileContent = fs.readFileSync(fileName);

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: 'cat.jpg', // File name you want to save as in S3
//         Body: fileContent
//     };

//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(`File uploaded successfully. ${data.Location}`);
//     });
// };

// uploadFile('owner.jpg');

/** Storage Engine */
const CustomStorage = function (opts) {
  function getDestination (req, file, cb) {
    cb(null, BUCKET_NAME)
  }

  function MyCustomStorage (opts) {
    this.getDestination = (opts || getDestination);
  } 

  MyCustomStorage.prototype._handleFile = function _handleFile (req, file, cb) {
    this.getDestination(req, file, function (err, bucketname) {
      if (err) return cb(err)

      var upload = s3Stream.upload({
        "Bucket": bucketname,
        "Key": new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname),
        "ContentType": `image/${path.extname(file.originalname).substring(1)}`
      });   
      upload.maxPartSize(20971520);
      upload.concurrentParts(5);
      file.stream.pipe(upload);
      upload.on('error', function (error) {
        console.log(error);
        cb(error);
      });

      upload.on('path', function (details) {
        console.log(details);
      });

      upload.on('uploaded', function (details) {
        console.log(details);
        cb(null, {
          details: details
        });
      });
    })
  }

  MyCustomStorage.prototype._removeFile = function _removeFile (req, file, cb) {
    fs.unlink(file.path, cb)
  }

  return new MyCustomStorage(opts)
}



// const storageEngine = multer.diskStorage({
//   destination: './public/uploads',
//   filename: function(req, file, fn){
//     fn(null,  new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
//   }
// }); 
//init
// picture

let input = [
  { name: 'picture', maxCount: 5 },
  { name: 'media', maxCount: 5 }
]

const picture =  multer({
  storage: CustomStorage(),
  limits: { fileSize:200000 },
  fileFilter: function(req, file, callback){
    validateFile(file, callback);
  }
}).fields(input); 

var validateFile = function(file, cb ){
  allowedFileTypes = /jpeg|jpg|png|gif|mp4|ogg/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType  = allowedFileTypes.test(file.mimetype);
  if(extension && mimeType){
    return cb(null, true);
  }else{
    cb("Invalid file type. Only JPEG, PNG, MP4, OGG and GIF file are allowed.");

  }
}



exports.Picture = picture;
