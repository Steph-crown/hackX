// Change the details before test.
const assert = require('assert');
const supertest = require('supertest');
const app = require('../server');	

describe('Signup Tests', function() {
	it('Test for successfull signup connection', async ()=>{
		const response = await supertest(app).post('/signup').send({
			"firstname": "david", 
			"lastname": "ayo", 
			"email": "ayo@gmail.com", 
			"password": "backend",
			"confirmPassword": "backend",
			"username": "test",
			"track": "health",
			"age": 20,
			"institution": "unilag"
		}); 
		// Expected a pass result for a successful connection.
		assert.equal(response.status, 200);
		// Expected a pass result if the details have not been used before.
		assert.equal(response.body, "Successfully Signed Up")
	}).timeout(10000);
});








