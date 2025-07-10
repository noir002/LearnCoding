const accountId = 144553
let accountEmail = "paras@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// var is functional scoped...available everywhere...so a single update will cause change in entire code
// let is block scoped...available only in the scope {}...i.e. inside to specific curly braces..and will be updated there only

//accountId = 2 // constant change not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])