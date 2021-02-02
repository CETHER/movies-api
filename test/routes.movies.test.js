const { internal } = require('@hapi/boom');
const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);

  describe('GET /movies', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });

        done();
      });
    });
  });

  describe('GET /movie', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with a new movie', function(done) {
      request.get('/api/movies/600dc60b5430150a98538cf2').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie retrieved'
        });

        done();
      });
    });
  });

  describe('POST /movie', function() {
    it('should respond with status 201', function(done) {
      request.post('/api/movies').expect(201, done);
    });

    it('should respond with a new movie', function(done) {
      request.post('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie created'
        });

        done();
      });
    });
  });

  describe('PUT /movie', function() {
    it('should respond with status 200', function(done) {
      request.put('/api/movies/600dc60b5430150a98538cf2').expect(200, done);
    });

    it('should respond with a movie updated', function(done) {
      request.put('/api/movies/600dc60b5430150a98538cf2').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie updated'
        });

        done();
      });
    });
  });

  describe('DELETE /movie', function() {
    it('should respond with status 200', function(done) {
      request.delete('/api/movies/600dc60b5430150a98538cf2').expect(200, done);
    });

    it('should respond with a movie deleted', function(done) {
      request.delete('/api/movies/600dc60b5430150a98538cf2').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie deleted'
        });

        done();
      });
    });
  });
})