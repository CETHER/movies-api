const { movieIdSchema } = require("../schemas/movies");

const moviesMock = [
  {
    "id": "c4c19e61-df47-4cb3-b2ba-bf3447e1b1e7",
    "title": "Like Sunday, Like Rain",
    "year": 1970, "cover": "http://dummyimage.com/173x133.png/5fa2dd/ffffff",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
    "duration": 1888,
    "contentRating": "R",
    "source": "http://php.net/augue/aliquam/erat/volutpat/in/congue.xml",
    "tags": ["Action|Drama|War", "Comedy", "Mystery|Thriller", "Horror", "Action|Drama"]
  },
  {
    "id": "cf3e0bfe-e82e-4bbc-96c3-659fbdbf8f70",
    "title": "Best Seller",
    "year": 1994, "cover": "http://dummyimage.com/141x230.png/5fa2dd/ffffff",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "duration": 1961,
    "contentRating": "R",
    "source": "http://businessinsider.com/est/quam.json",
    "tags": ["Musical"]
  },
  {
    "id": "b3320426-5a51-4ab6-b07a-5ff71aa2ea34",
    "title": "Goodbye Charlie",
    "year": 2001, "cover": "http://dummyimage.com/112x165.jpg/cc0000/ffffff",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "duration": 1950,
    "contentRating": "PG",
    "source": "https://blog.com/erat/curabitur/gravida/nisi/at/nibh/in.jpg",
    "tags": ["Drama|Romance", "Documentary", "Thriller", "Documentary", "Drama|Mystery|Thriller"]
  },
  {
    "id": "e785f036-3bf2-4f4b-8e33-be5e41bc741d",
    "title": "Day & Night",
    "year": 1985, "cover": "http://dummyimage.com/230x101.jpg/dddddd/000000",
    "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "duration": 2049,
    "contentRating": "R",
    "source": "http://marketwatch.com/luctus/rutrum/nulla/tellus/in.png",
    "tags": ["Adventure|Drama|Romance"]
  },
  {
    "id": "5f34a296-525e-4047-ada9-037e3fa3162d",
    "title": "Shock Doctrine, The",
    "year": 1992, "cover": "http://dummyimage.com/142x223.png/dddddd/000000",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "duration": 2035,
    "contentRating": "PG",
    "source": "https://domainmarket.com/luctus/tincidunt/nulla/mollis/molestie.png",
    "tags": ["Comedy|Romance", "Western", "Adventure|Sci-Fi", "Crime|Drama|Thriller"]
  },
  {
    "id": "bd1d4765-b256-4cda-9bed-de4eeeef2b05",
    "title": "War on Democracy, The",
    "year": 2012, "cover": "http://dummyimage.com/179x155.png/dddddd/000000",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "duration": 2004,
    "contentRating": "PG-13",
    "source": "http://quantcast.com/elementum/eu.png",
    "tags": ["Crime|Drama|Mystery", "Drama|Sci-Fi"]
  },
  {
    "id": "f64906d4-742f-4655-aab2-3f01b2db4933",
    "title": "The Cop in Blue Jeans",
    "year": 2008, "cover": "http://dummyimage.com/128x216.jpg/dddddd/000000",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "duration": 2021,
    "contentRating": "G",
    "source": "http://epa.gov/proin/eu/mi/nulla/ac/enim/in.json",
    "tags": ["Drama|Romance", "Drama", "Adventure|Children", "Drama", "Drama|Musical"]
  },
  {
    "id": "0757b5b3-9c21-407c-bf14-ebf4063a81e6",
    "title": "Sanshiro Sugata Part Two (Judo Saga II) (Zoku Sugata Sanshirô)",
    "year": 1996, "cover": "http://dummyimage.com/240x198.jpg/ff4444/ffffff",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "duration": 1958,
    "contentRating": "R",
    "source": "http://upenn.edu/semper.png",
    "tags": ["Action|Romance|Thriller", "Drama|Romance", "Drama|Western"]
  },
  {
    "id": "5092c894-74ae-4801-b22e-a520bb1fb7b8",
    "title": "Almost 18",
    "year": 2008, "cover": "http://dummyimage.com/232x195.png/ff4444/ffffff",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "duration": 2048,
    "contentRating": "PG",
    "source": "https://jimdo.com/maecenas/tristique/est/et/tempus.html",
    "tags": ["Mystery|Thriller", "Drama", "Adventure|Drama|Horror", "Adventure|Animation|Children"]
  },
  {
    "id": "fa7bb003-e4f8-49f4-a68c-e26aba490356",
    "title": "Trial",
    "year": 2008, "cover": "http://dummyimage.com/248x171.png/ff4444/ffffff",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "duration": 2036,
    "contentRating": "G",
    "source": "https://hao123.com/fermentum/justo.xml",
    "tags": ["Crime|Drama", "Action|Adventure|Thriller"]
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    const movies = await moviesMock;
    return movies;
    //return Promise.resolve(moviesMock);
  }

  async getMovie() {
    const movie = await moviesMock[0];
    return movie || {};
  }
  
  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async updateMovie() {
    const updatedMovieId = await moviesMock[0];
    return updatedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await moviesMock[0];
    return deletedMovieId;
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
}