const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let dashboard = new mongoose.Schema({
		bio: {
		    type: String,
		    minlength: 3,
		    maxlength: 200
		},
		track: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		link: { 
		    type: Array
		},
		gender: {
		    type: String,
		},
		number: {
		    type: Number,    
		    minlength: 10,
		    maxlength: 12,
		},
		institution: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		department: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		media: {
		    type: Array,
		},
		picture: {
		    type: Array,
		},
		
		


},{timestamps: true},{collection: "dashboard"});

Dashboard = mongoose.model('Dashboard', dashboard), mongoose.set('useFindAndModify', false);

function validateDashboard(user) {
  const schema = Joi.object().keys({
    bio: Joi.string()
	    .min(3)
	    .max(200) 
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Bio should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Bio should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Bio should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Bio should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Bio should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
    track: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Track should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Track should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Track should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Track should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Track should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	link: Joi.array().items(Joi.string() 
  		.min(2)
  		.error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Links should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Links should not be empty!";
	              break;
	            case "number.min":
	              err.message = "Links should have at least 3 characters!";
	              break;
	            case "number.base":
	              err.message = "Links should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	})),
  	gender: Joi.string()  
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Gender should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Gender should not be empty!";
	              break;
	            case "string.base":
	              err.message = "Gender should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}), 
  	number: Joi.string()
	    .min(10)
	    .max(12)
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "number.empty":
	              err.message = "Number should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Number should not be empty!";
	              break;
	            case "number.min":
	              err.message = "Number should have at least 10 characters!";
	              break;
	            case "number.max":
	              err.message = "Number should have at most 12 characters!";
	              break;
	            case "number.base":
	              err.message = "Number should be a number.";
	              break;
	            default: 
	              break;
	          	}
	        });
	        return errors;
      	}),
  	institution: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Institution should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Institution should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Institution should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Institution should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Institution should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	department: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Department should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Department should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Department should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Department should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Department should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	media: Joi.string()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Media should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Media sshould not be empty!";
	              break;
	            case "string.base":
	              err.message = "Media should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	picture: Joi.string()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Picture should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Picture should not be empty!";
	              break;
	            case "string.base":
	              err.message = "Picture should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
   


  	});

  	return schema.validate(user)
}

exports.Dashboard = Dashboard; 
exports.validateDashboard = validateDashboard;