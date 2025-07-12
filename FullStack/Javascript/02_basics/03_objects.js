const mySym = Symbol("key1")           // Creates a symbol

// singleton
// Object.create

// object literals




const JsUser = {
    name: "Hitesh",
    "full name": "Paras Chauhan",
    [mySym]: "mykey1",                 //Way to use it as a symbol instead of string
    age: 18,
    location: "Aligarh",
    email: "paras@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])           //Square brackets can be used in case of special access 
//console.log(JsUser."full name")      // It will throw error as string key "..." can not be directly accessed. So square brackets are needed here
console.log(JsUser["full name"])
console.log(JsUser.mySym)              // Undefined as the above mySym is declared inside square bracket, so it is a different datatype
console.log(JsUser[mySym])             // Symbol =>  [(with]square brackets) - symbol datatype];[(without square brackets) - string datatype(if decleared)];

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)              //Used to freeze data as it is
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());