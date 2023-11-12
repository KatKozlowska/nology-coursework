
// 1. Function which takes an number and returns true if its positive and false if its negative.

const isNumberPositive = (number) => {
    if (number>0) {
        return true;
    } else { 
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));


// 2. Function which takes a number of days and converts it to age. 


const convertDaysToAge = (days) =>{   
    const years= days/365;
    const message = days + " days is equal to " + years + " years.";
    return message;
}
console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

// 3. Function which takes three numbers and returns the largest of 3. 

const getLargestNumber= (num1,num2,num3) => {
     if (num1>num2 && num1>num3) {
        return num1 ;
    } else if (num2>num1 && num2>num3) {
        return num2;
    } else if (num3>num1 && num3>num2) {
        return num3; 
    } 
   
    return "All the numbers are equal";
} 

console.log(getLargestNumber(2, 1 ,4));
console.log(getLargestNumber(6, 2 ,3));

// 4. Function that takes an array of names and returns the last name from the array of names. 

const getLastName = (nameArr) => {
    return nameArr[nameArr.length - 1];
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu",]));


// or ...

const getLastNameRecursively = (nameArr) => {

    let nameToReturn = "";
    for (let index = 0; index < nameArr.length; index++) {
        nameToReturn = nameArr[index];
    }
    return nameToReturn;
}

console.log(getLastNameRecursively(["Charlie", "Rob", "Andy"]));
console.log(getLastNameRecursively(["Ash", "Stu",]));



// 5. function which takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are 
// one or more negative numbers in the array. 

const allNUmbersPositive = (numberArr) => {
    for( let index = 0; index < numberArr.length; index++) {
        if (numberArr[index] < 0) {
            return false; 
        }
    }
    return true;
}

console.log(allNUmbersPositive([2,4,5]))
console.log(allNUmbersPositive([-5,4,6]))
