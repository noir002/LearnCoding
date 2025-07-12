// Singleton object :
const myObj = new Object();    // SAME OUTPUT

// Non singleton object :
const myObj1 = {}              // SAME OUTPUT


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// *******************************************Very important
// console.log(Object.keys(tinderUser));                            // Get all keys of tinder user object
// console.log(Object.values(tinderUser));                          // Get all values of tinder user object
// console.log(Object.entries(tinderUser));                         // Get all [keys:value] of tinder user object in form of array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));            // To check whether this property exists or not (to avoid app crash during data extraction from database)




//***********************************************************// Join objects- using assign/using spread operator

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }------------------------>Obj1(first parameter is target where to store all of them)
// const obj3 = Object.assign({}, obj1, obj2, obj4)------> Here empty object is the target

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email                 //;Returns email of first user
// console.log(tinderUser);


//----------------------------------------------------(Lc 18/51)-------------------------

//Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course            //Destructuring; changing 'courseInstructor' to 'instructor'

// console.log(courseInstructor);
console.log(instructor);

