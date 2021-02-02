const sinon = require('sinon');
const { moviesMock, filteredMoviesMock } = require('./movies');

//Stub trae las peliculas del mock
const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

//Stub que trae las peliculas filtradas
const tagQuery = {tags: { $in: ['Drama'] } }
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const getStub = sinon.stub();
getStub.withArgs('movies').resolves(moviesMock[0]);

const createStub = sinon.stub().resolves(moviesMock[0]);

const updateStub = sinon.stub().resolves(moviesMock[0]);

const deleteStub = sinon.stub().resolves(moviesMock[0]);

class MongoLibMock {
  //función muck que returna un stub con los argumentos (movies) o (movies, tagquery)
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  get(collection, id) {
    return getStub(collection, id);
  }

  //función muck que retorna los datos de la pelicula
  create(collection, data) {
    return createStub(collection, data);
  }

  update(collection, id, data) {
    return updateStub(collection, id, data);
  }

  delete(collection, id) {
    return deleteStub(collection, id);
  }
}

module.exports = { 
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
  MongoLibMock
}