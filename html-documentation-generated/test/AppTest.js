const assert = require('chai').assert;
const { response } = require('express');
const app = require('../restAPI');

describe('restAPI',function() {
    it('REST API should return port number of 3400', function() {
        assert.equal(app(), '3400');
    });


    it('It should GET all tasks', (done) =>{        //This doesn´t work properly
        mocha.request(server)
        .get('../views/index.html')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.should.be.eq(3);
            done();
        })
    });
  
});