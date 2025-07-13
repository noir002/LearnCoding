//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);             // This can access elements which are present outside
    }
    // console.log(website);               //error- bcz chota baccha badon se cheez maang sakta hai, bade log choton se nahi.i.e. website andar hai, use bahar(bade scope mein access nhi kr sakte)

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);                //Error
}

// console.log(username);                   //Error


// ++++++++++++++++++ interesting ++++++++++++++++++

// ✅ Function Declaration
// JavaScript isse upar le jaata hai (hoisting hoti hai), 
// isliye aap isse pehle bhi call kar sakte ho.

console.log(addone(5)) // Output: 6 — Kaam karega, koi error nahi...direct fcn mein pahele bhi excess kr sakte hain

function addone(num) {
    return num + 1;
}


// ❌ Function Expression
// function ka body hoist nahi hota.

addTwo(5); // ❌ Error

const addTwo = function(num) {
    return num + 2;
};

// ❌ Error: addTwo is not a function ... bcx is baar humen ise ek variable bna diya hai(const)
