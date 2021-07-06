const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const validator = require('validator');
let ObjectId = mongoose.Schema.ObjectId;

let ecxSchema = new mongoose.Schema({
		firstname: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		lastname: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minlength: 5,
    		maxlength: 255,
			lowercase: true,
			validate: (value) => {
				return validator.isEmail(value)
			}
		},
		password: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 255
		},
		username: {
		    type: String,
		    required: true,
		    minlength: 3,
		    maxlength: 50
		},
		role: {
		    type: String,
		    minlength: 3,
		    maxlength: 10
		},
		dashboard: [{
		    type: mongoose.Schema.Types.ObjectId,
		    ref: 'Dashboard'
		}],
		submission: [{
		    type: mongoose.Schema.Types.ObjectId,
		    ref: 'Submission'
		}],
		


},{timestamps: true},{collection: "user"});

User = mongoose.model('ecx',ecxSchema), mongoose.set('useFindAndModify', false)

function validateUser(user) {
  const schema = Joi.object().keys({
    firstname: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Firstname should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Firstname should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Firstname should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Firstname should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Firstname should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
    lastname: Joi.string()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Lastname should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Lastname should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Lastname should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Lastname should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Lastname should be a string.";
	              break;
	            default:
	              break;
	          	}
	        });
	        return errors;
      	}),
    email: Joi.string()
	    .min(5)
	    .max(255)
	    .required()
	    .email()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	          	case "string.empty":
	              err.message = "Email should not be empty!";
	              break;
	            case "any.empty":
	              err.message = "Email should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Email should have at least 5 characters!";
	              break;
	            case "string.max":
	              err.message = "Email should have at most 255 characters!";
	              break;
	            case "string.email":
	              err.message = "Not a valid E-mail";
	              break;
	            case "string.base":
	              err.message = "Email should be a string.";
	              break;
	            default:
	              break;
	          	}
          	});
	        return errors;
      	}),
    password: Joi.string()
	    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
	    .min(3)
	    .max(255)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	            case "any.empty":
	              err.message = "Password should not be empty!";
	              break;
              	case "string.empty":
	              err.message = "Username should not be empty!";
	              break;
	          	case "string.regex.base":
	              err.message = "Password should be minimum of 3 characters.";
	              break;
	            case "string.min":
	              err.message = "Password should have at least 3 characters!";
	              break;
	            case "string.max":
	              err.message = "Password should have at most 255 characters!";
	              break;
	             case 'string.pattern.base':
	              err.message = "Password should be minimum of 3.";
	              break;
	            case "string.base":
	              err.message = "Password should be a string.";
	              break;
              	case "string.ref":
	              err.message = "Confirm Password must be the same as Password.";
	              break;
	            default:
	              break;
	          	}
          	});
	        return errors;
      	}),
    confirmPassword: Joi.ref('password'),
    username: Joi.string()
	    .alphanum()
	    .min(3)
	    .max(50)
	    .required()
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	            case "any.empty":
	              err.message = "Username should not be empty!";
	              break;
              	case "string.empty":
	              err.message = "Username should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Username should have at least 3characters!";
	              break;
	            case "string.max":
	              err.message = "Username should have at most 50 characters!";
	              break;
	            case "string.base":
	              err.message = "Username should be a string.";
	              break;
	            default:
	              break;
	          }
	        });
	        return errors;
      	}),
  	role: Joi.string()
	    .alphanum()
	    .min(3)
	    .max(50)
	    .error((errors) => {
	        errors.forEach((err) => {
	          switch (err.code) {
	            case "any.empty":
	              err.message = "Role should not be empty!";
	              break;
              	case "string.empty":
	              err.message = "Role should not be empty!";
	              break;
	            case "string.min":
	              err.message = "Role should have at least 3characters!";
	              break;
	            case "string.max":
	              err.message = "Role should have at most 10 characters!";
	              break;
	            case "string.base":
	              err.message = "Role should be a string.";
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

exports.User = User; 
exports.validate = validateUser;