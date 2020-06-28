/*
============================================
; Title:  kimberlinassignment-5.4.js
; Author: Professor Krasso
; Date:   28 June 2020
; Modified by: Rhiannon Kimberlin
;===========================================
*/

console.log("Rhiannon Kimberlin")
console.log("Assignment 5.4")
console.log("June 28, 2020")
console.log("")

var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Anadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstname: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];

//built in map() by ratings
var ratings = composers.map(function(music) {
  return music.rating
}
);

//output of composer by rating
console.log("-- COMPOSER BY RATING --")
composers.forEach(function(music) {
  console.log("Rating: " + music.rating)
  console.log("Composer: " + music.lastName)
  console.log("")
}
);

//built in map() by  genre
var genre = composers.map(function(music) {
  return music.genre
}
);

//output of composer by genre
console.log("-- COMPOSER BY GENRE --")
composers.forEach(function(music) {
  console.log("Genre: " + music.genre)
  console.log("Composer: " + music.lastName)
  console.log("")
}
);