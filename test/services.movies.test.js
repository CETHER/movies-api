const assert = require('assert');
//sustituye una libreria por un mockLib creada
const proxyquire = require('proxyquire');

//trae la libreria de mongoMock(getAll y create) y también sólo getAllStub
const { MongoLibMock, getAllStub, getStub, createStub, updateStub, deleteStub } = require('../utils/mocks/mongoLib');
//importa el la colección de pelliculas mock
const { moviesMock } = require('../utils/mocks/movies');

//tests de servicios

//test de 
describe('services - movies', function (params) {
  // se sustituye en el archivo de servicios, la libreria de mongo por mongoLibMock que contiene los métodos getMovies
  /* getMovie
  createMovie
  updateMovie
  deleteMovie */
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });

  //Se instancia la clase MoviesService
  const moviesService = new MoviesService();


  describe('when getMovies method is called', async function () {
    it('shoud call the getAll MongoLib method', async function () {
      //metodo que se importa de la instancia MoviesService, pero con el método getMovies
      const movies = await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    })
    it('shoud return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('when getMovie method is called', async function () {
    it('shoud call the get MongoLib method', async function () {
      //metodo que se importa de la instancia MoviesService, pero con el método getMovie
      const movie = await moviesService.getMovie({});
      assert.strictEqual(getStub.called, true);
    })
    it('shoud return a movie selected', async function () {
      const result = await moviesService.getMovie({});
      const expected = moviesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('when createMovie method is called', async function () {
    it('shoud call the create MongoLib method', async function () {
      //metodo que se importa de la instancia MoviesService, pero con el método getMovie
      const movie = await moviesService.createMovie({});
      assert.strictEqual(createStub.called, true);
    })
    it('shoud return a movie created', async function () {
      const result = await moviesService.createMovie({});
      const expected = moviesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('when updateMovie method is called', async function () {
    it('shoud call the update MongoLib method', async function () {
      //metodo que se importa de la instancia MoviesService, pero con el método getMovie
      const movie = await moviesService.updateMovie({});
      assert.strictEqual(updateStub.called, true);
    })
    it('shoud return a movie updated', async function () {
      const result = await moviesService.updateMovie({});
      const expected = moviesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('when deleteMovie method is called', async function () {
    it('shoud call the delete MongoLib method', async function () {
      //metodo que se importa de la instancia MoviesService, pero con el método getMovie
      const movie = await moviesService.deleteMovie({});
      assert.strictEqual(deleteStub.called, true);
    })
    it('shoud return a movie deleted', async function () {
      const result = await moviesService.deleteMovie({});
      const expected = moviesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });
})