/*
This is a tip calculator practice
*/

const theTotalTip = (money) => {
    if(isNaN(money) === true){
        //isNan checks to see if money is a number
        return ("This is not a number!")
    }else{
        lastCost = money * .065 ;
        let finalCost = lastCost + money;
        return finalCost.toFixed(2)
        //.toFixed() cuts off everything after the two decimal places 
    }

}

console.log(theTotalTip(9.99));

