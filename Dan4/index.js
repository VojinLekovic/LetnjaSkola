let x = 3;
let y = 2;

function outerFunction(x) {
    function innerFunction(y){
        return x + y;
    }
return innerFunction;
}
const z = outerFunction(x);
console.log(z(y));
let nick = 'Vojin';
console.log(`"${nick}"`);
let person = { surname: 'Lekovic', age: 20};
function greet({name = 'Voki'}) {
    console.log(`Hello ${name}`);
}
greet(person)

let text = "Text 123 vojin.lekovic.012@gmail.com"
let emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w+\b/g;

let email = text.match(emailRegex);
console.log(email);
