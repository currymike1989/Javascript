//ASSIGN A FUNCTION TO A VARIABLE
const foo = () =>{
    console.log("foobar");
};

foo();

//PASS A FUNCTION AS AN ARGUMENT
function sayHello(){
    return "Hello ";
}

function greeting(helloMessage, name){
    console.log(helloMessage() + name);
}

greeting(sayHello, "Mike Curry");

//RETURN A FUNCTION
function sayBye(){
    return function(){
        console.log("hello");
    }
}



//HIGHER ORDER FUNCTIONS
/* function canDriveCar(age){
    return age >= 16;
}

function canRentACar(age){
    return age >= 25;
}

function canDrinkBeer(age){
    return age >= 21;
}

console.log(canDrinkBeer(60));
*/

function requiredAge(requiredAge){
    return function(age){
        return age >= requiredAge;
    }
}

let canDriveCar = requiredAge(16);
let canRentACar = requiredAge(25);
let canDrinkBeer = requiredAge(21);

/* console.log(canDriveCar(6));
console.log(canRentACar(33)); */

/* let people = [{name: "Jim" ,age:6,}, {name: "Mike" ,age:24,}, {name: "Paul" ,age:32,}];
people.forEach(person => {
    if (canDriveCar(person.age)){
        console.log(person.name + " can drive a car.");
    }
    if (canRentACar(person.age)){
        console.log(person.name + " can rent a car.");
    }
    if (canDrinkBeer(person.age)){
        console.log(person.name + " can drink beer.");
    }else{
        console.log(person.name + " cant do any of these things")
    }
}) */