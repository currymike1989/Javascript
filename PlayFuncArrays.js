const randomArray = [];

const addElement = (random) => {
    random.push("strawberry");
    random.push("lemon");
    random.push("blue berry");
    random.push("pineapple");
    random.push("dog");
    random.push("cat");
    random.push("lizard");
    random.push("popcorn");
    random.push("pizza");
    random.push("chocolate");
    random.push("bird");
};

const popElement = (random) => {
    return removedElement = random.pop();
};


//PASSING ARRAY RANDOM THRU THE ADD ELEMENT
//FUNCTION WHICH ADDS THE ITEMS TO THE EMPTY ARRAY
addElement(randomArray);

//THE FIRST WHOLE LIST OF ITEMS FROM THE ARRAY 
//SORTED IN ABC ORDER
console.log(randomArray.sort());

//PASSING ARRAY RANDOM THRU THE POP ELEMENT 
//FUNCTION WHICH REMOVES THE LAST ELEMENT IN THE ARRAY
popElement(randomArray);

//THE SECOND ARRAY WHERE THE LAST ELEMENT IS POPPED OFF
console.log(randomArray.sort());

//THIS THE LAST ELEMENT POPPED OFF OF THE ARRAY STORED 
// IN ITS OWN VARIABLE
console.log(removedElement);