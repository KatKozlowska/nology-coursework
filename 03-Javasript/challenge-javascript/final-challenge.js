
// 1. Function which takes an number and returns true if its positive and false if its negative.

const isNumberPositive = (number) => {
    if (number>0) {
    console.log("true");
    } else (number<0) 
    console.log("false");
}

isNumberPositive(-1);
isNumberPositive(10);

// why is this returning three resutlts instead of two???

// 2. Function which takes a number of days and converts it to age. 


const convertDaysToAge = (days) =>{   
    const years= days/365
    const message = days + " days is equal to " + years + " years."
    console.log(message) 
}
convertDaysToAge(3650);
convertDaysToAge(6570);

// 3. Function which takes three numbers and returns the largest of 3. 

const getLargestNumber= (num1,num2,num3) => {
     if (num1>num2 && num1>num3){
     console.log (num1);
    } else if (num2>num1 && num2>num3){
    console.log (num2);
    }else if (num3>num1 && num3>num2){
    console.log (num3); 
    } else console.log("All the numbers are equal");
} 

getLargestNumber(2, 1 ,4);
getLargestNumber(6, 2 ,3);

// 4. Function that takes an array of names and returns the last name from the array of names. 


//const getLastName= ([name1,name2,name3]);
//const names = [
  //  name[0]= name1;
  //  name[1]= name2;
   // name[2]= name3]

//for (let index= 0; index <3; index ++) {
 //   console.log(index[2])
//}


//getLastname(["Charlie", "Rob", "Andy"]);
//getLastname(["Ash", "Stu",]);

// 5. function which takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are 
// one or more negative numbers in the array. 