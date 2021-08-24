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

// function movieFunc(movieDesc){
//     console.log(this.movie, movieDesc);
// }

// let newEmptyObject = new movieFunc("oops");
// newEmptyObject.name = 'Shahana';
// newEmptyObject.age = 37;
// console.log(newEmptyObject);

// var movie = 'rush';
// function movieFunc(movieDesc){
//     console.log(movie, movieDesc);
// }

// movieFunc('this is a racing movie');

let movieShop = {
    movie: "Hell or high water",
    movieFunc(movieDesc){
        console.log(this.movie, movieDesc);
    }
};
// movieShop.movieFunc("is a funny movie");

class Workshop{
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher, question);
    }
}
class AnotherWorkshop extends Workshop{
    speakUp(msg){
        this.ask(msg);
    }
}
let python = new AnotherWorkshop("john");
// 
////// Asynchronous programming////
function hello(){
    console.log("hello");
}
// setTimeout(hello, 1000);
// console.log("hello again");
////// The call stack in the browser////

divide(100,5);

function multiply(x,y){
    const result = x*y;
    console.log(result);
}

function sum(x,y){
    const result = x+y;
    console.log(result);
    multiply(20,30);
}

function subtract(x,y){
    const result = x-y;
    console.log(result);
    sum(30,50);
}

function divide(x,y){
    const result = x/y;
    console.log(result);
    subtract(50,40);
}
