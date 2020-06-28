console.log("Rhiannon Kimberlin")
console.log("Exercise 5.3")
console.log("June 28, 2020")
console.log("")

//Array of Composers with firstName, lastName, genre, rating
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

//forEach function with iteration of composers
composers.forEach(function(composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  )
})