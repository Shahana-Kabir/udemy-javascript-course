// var movieShop = {
// movie:"The switch",
// movieFunc(movieDesc){
//     let movie = "the 2";
//     console.log(this.movie, movieDesc);
// },

// };
// movieShop.movieFunc('watchings');

//////////

// function movieFunc (movieDesc){
//     console.log(this.movie, movieDesc);
// }
// let moveieSHop1 = {
//     movie: "alice",
    
// };
// let moveieSHop2 = {
//     movie: "bob",
    
// };

// movieFunc.call(moveieSHop1, "is a fantastic movie");
// movieFunc.call(moveieSHop2, "is a fantastic movie");

function movieFunc(movieDesc){
    console.log(this.movie, movieDesc);
}

let newEmptyObject = new movieFunc("oops");
newEmptyObject.name = 'Shahana';
newEmptyObject.age = 37;
console.log(newEmptyObject);

