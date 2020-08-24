// scope

function printer(){
    var name = 5;
    console.log(name);
}
printer();
console.log(name);
var name = 5;


x = 5;
console.log(x);
var x;

// imediatly invoked function expresion;

(function add(){
    var a = 7;
    var b = 9;
    var result = a + b;
    console.log(result);
})()

