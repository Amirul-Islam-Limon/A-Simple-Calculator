function welcomeGreet(name, greetFunction){
    greetFunction(name);
}
function greetMorning(name){
    console.log("Good Morning ,", name);
}
function greetEvening(name){
    console.log("Good Evening ,", name);
}

welcomeGreet("Amirul Islam",greetMorning);
welcomeGreet("Monirul Islam", greetEvening)






// function functionOne(x){
//     console.log(x);
// }
// // functionOne(2);

// function functionTwo(x){
//     console.log(x)
// }
// // functionTwo(2);
// // functionTwo(2, function(x){
// //     console.log(x + 5);
// // })
// functionTwo(2, functionOne(x), functionTwo(x));

// // test

// document.getElementById("").addEventListener("click", function(){

// })
