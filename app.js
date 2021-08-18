// var movieShop = {
// movie:"The switch",
// movieFunc(movieDesc){
//     let movie = "the 2";
//     console.log(this.movie, movieDesc);
// },

// };
// movieShop.movieFunc('watchings');

//////////

function movieFunc (movieDesc){
    console.log(this.movie, movieDesc);
}
let moveieSHop1 = {
    movie: "click",
    movieFunc: movieFunc,
};
let moveieSHop2 = {
    movie: "click2",
    movieFunc: movieFunc,
};

moveieSHop1.movieFunc("click is a fantastic movie");
moveieSHop2.movieFunc("click2 is a fantastic movie");


