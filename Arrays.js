//CREATE AN ARRAY
const hobbies =["Hiking", "Running", "Golfing"];

//console.log(hobbies);


//ACCESSING ELEMENTS
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.','Where there is love there is life.'];
let listItem = famousSayings[0]

//console.log(listItem);
//console.log(famousSayings[2]);
//console.log(famousSayings[3]);


//UPDATE ELEMENTS 
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = "avocados"


//ARRAYS WITH (LET) AND (CONST)
//(LET) VARIABLES DECLARED WITH LET CAN BE REASSIGNED
//(CONST) VARIABLES DECLARED WITH CONST CANNOT BE REASSIGNED
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments = ["Mayo"];
//condiments[0] = "Mayo";

//console.log(condiments);

utensils[3] = "Spoon";

//console.log(utensils); 


//THE LENGTH PROPERTY (.length)
//returns the length of the array pretty much =>
//how many objectives or variables inside 
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

//console.log(objectives.length); 


//THE PUSH PROPERTY (.push)
//allows us to add items to the end of an array

const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("mow the yard", "clean basement");

//console.log(chores);


//THE  POP METHOD (.pop)
//REMOVES THE LAST ITEM OF AN ARRAY

const chores2 = [
    "wash dishes",
    "do laundry",
    "take out trash",
    "cook dinner",
    "mop floor"
];

let lastOne = chores2.pop();

//console.log(chores2);
//console.log(lastOne);


//MORE ARRAY METHODS
const groceryList2 = [
    "orange juice", "bananas",
    "coffee beans", "brown rice",
    "pasta", "coconut oil",
    "plantains",
];

//console.log(groceryList2);

//SHIFT METHOD
//REMOVES THE FIRST ITEM FROM
//THE ARRAY
let shiftMethod = groceryList2.shift()

//console.log(shiftMethod);
//console.log(groceryList2);

//TOOK THE SHIFT FROM SHIFTMETHOD AND ADDED IT
//THRU THE PUSH METHOD TO THE CHORES2 ARRAY FROM THE 
//POP METHOD SECTION ABOVE

//chores2.push(shiftMethod);
//console.log(chores2);

//UNSHIFT METHOD
//ADDS ITEM TO THE BEGGINNING 
//OF AN ARRAY
groceryList2.unshift("popcorn");

//console.log(groceryList2);

//SLICE METHOD
//COPYS AND RETURN A PART OF AN ARRAY 
//THAT YOU SELECTED 
//slice() IS NON-MUTATING

let sliceMethod = groceryList2.slice(1,4);

//console.log(sliceMethod);
//console.log(groceryList2);


//INDEXOF METHOD (.indexOf())
//FIND THE INDEX OF A SELECT ELEMENT OF AN ARRAY
const pastaIndex = groceryList2.indexOf("pasta");

//console.log("The index of pasta is " + pastaIndex + ".");

//PASSING AN ARRAY THRU A FUNCTION
//ADDING A ITEM TO GROCERYLIST THRU A 
//FUNCTION WITH THE PUSH METHOD
const addFood = (food) => {
    food.push("strawberries");
}

addFood(groceryList2);

console.log(groceryList2);


