const vacationSpots = [["Park","Bathroom","Mall"],["Today", "Tommorow",
"Next Week"]];

/* console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]); */

//THE FOR LOOP

/* for (let i = 10; i > 0; i--){
    console.log(i);
} */

//LOOPING THROUGH ARRAYS
/* for (let i = 0; i < vacationSpots.length; i++){
    console.log("I would love to visit the " + vacationSpots[i]);
}; */

//LOOPING THRU NESTED ARRAYS
const bobsFollowers = ["Jeff", "Sarah", "Jake", "Michael"];
const tinasFollowers = ["Jeff", "Jake", "Bob"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
};

console.log(mutualFollowers);