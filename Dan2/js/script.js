console.log("Hello World");
var x = 5;
var y = 3;
if(x===y){
    console.log(y);
}
else console.log(x);
sayHello(x);
var object = {
    number : 3,
    letter : "A"
}
objectLetter(object);

for(var i=1; i<11; i++){
    console.log(i);
}

function sayHello(x){
    x>=1 ? console.log("Hello") : console.log("Bye");
}
function objectLetter(object){
    console.log(object.letter);
}

