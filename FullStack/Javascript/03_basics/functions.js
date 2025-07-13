
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//-----------------------------------------------------------(Lc20/51)---------------------------------------------------------------------
//Rest operator(...)= Returns a array of all the parameters in function even if they are not previously declared
//Rest operator is used in cases of e-commerce where there is uncertanity about no. of products a user will add in cart.(Real time totalling issue)


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))       // prints [200,400,500,2000]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){                         //When we do not already know name of object user is passing e.g. user
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)         //Necessary to call the function

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));