//arrays

const myArray = [0,1,2,3,5,7,8]
console.log(myArray[0]);

const arr = new Array(1,2,3,4,7,9)

// Array Methods

myArray.push(6);
console.log(myArray);

myArray.pop();          // Delets last element

myArray.unshift(10);     // Adds element in starting of array

console.log(myArray);
console.log(myArray.includes(11));    //Gives true or false...in boolean
console.log(myArray.indexOf(11));     // Will return index of given element. Returns (-1) if element not found 

const newArr = myArray.join();        //convert array into string
console.log(myArray);
console.log(newArr);
console.log(typeof myArray);
console.log(typeof newArr);


// slice, splice
// slice: returns the trimmed value but makes no change in original arrray
// splice: returns the trimmed value but also trim the orignal array by remaining values

const mn1 = myArray.slice(1,5)     //Doesnot includes the end value
console.log(mn1);
console.log( "A" ,myArray);

const mn2 = myArray.splice(1,5);   //Includes the end value
console.log(mn2);
console.log("B" , myArray);

