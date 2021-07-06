const assert = require('assert');
const supertest = require('supertest');
const app = require('../server');	

describe('Login Tests', function() {
	it('Test for successfull login connection', async ()=>{
			const response = await supertest(app).post('/login').send({
				"email": "olaxunilag@gmail.com", 
	 			"password": "unilag_2" 
			});
			// Expected a pass result for a successful connection.
			assert.equal(response.status, 200);
			// Expected a failed result for a correct credential.
			assert.equal(response.body, "Login Incorrect")
		}).timeout(20000);
});








