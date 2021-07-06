const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let submission = new mongoose.Schema({
		name: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		tagline: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 80
		},
		problem: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 400
		},
		challenges: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 300
		},
		technologies: {
		    type: String,
		    minlength: 3,
		    maxlength: 200
		},
		links: {
		    type: String,
		    minlength: 3,
		    maxlength: 200
		},
		vidLinks: {
		    type: String,
		    minlength: 3,
		    maxlength: 200
		},
		video: {
		    type: Array,
		},
		pictures: {
		    type: Array,
		},
		


},{timestamps: true},{collection: "submission"});

Submission = mongoose.model('Submission',submission), mongoose.set('useFindAndModify', false)

function validateSubmission(user) {
  const schema = Joi.object().keys({
    name: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Name should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Name should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Name should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Name should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Name should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
    tagline: Joi.string()
	    .min(3)
	    .max(80)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Tagline should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Tagline should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Tagline should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Tagline should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Tagline should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	problem: Joi.string()
	    .min(3)
	    .max(400)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Problems should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Problems should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Problems should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Problems should have at most 400 characters!";
	              break;
	            case "string.base":
	              err.message = "Problems should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	challenges: Joi.string()
	    .min(3)
	    .max(300)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Challenges should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Challenges should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Challenges should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Challenges should have at most 300 characters!";
	              break;
	            case "string.base":
	              err.message = "Challenges should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	technologies: Joi.string()
	    .min(3)
	    .max(200)
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Technologies should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Technologies should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Technologies should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Technologies should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Technologies should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	links: Joi.string()
	    .min(3)
	    .max(200)
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Links should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Links should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Links should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Links should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Links should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	vidLinks: Joi.string()
	    .min(3)
	    .max(200)
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Video links should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Video links should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Video links should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Video links should have at most 200 characters!";
	              break;
	            case "string.base":
	              err.message = "Video links should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
    video: Joi.string()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Video should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Video should not be empty!";
	              break;
	            case "string.base":
	              err.message = "Video should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
  	pictures: Joi.string()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Pictures should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Pictures should not be empty!";
	              break;
	            case "string.base":
	              err.message = "Pictures should be a string.";
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

exports.Submission = Submission; 
exports.validateSubmission = validateSubmission;