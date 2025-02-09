alert("Welcome to Krishna Motor Parts");

//array
var arr = [1,2,3,4, ] 

//foreach.map.filter.find.indexOf

arr.forEach(function(val){
    console.log(val + "hello");
})

//_______________________________________________________________________________________________________________________________________
// apne jis array pr map chalaya hai, map aapko ek aur naya array lauta ke dega. Usmein utne hi member honge jitne previous array mein hain...
// we can do operations in it.
// map dekhte hi mn mein ek blank array banana aur usmein utne hi khali spaces bna lena, jitne previous array mein hain.

var ans = arr.map(function(val){
    return val + 13;
})

console.log(ans);

//_______________________________________________________________________________________________________________________________________
//filter krta hai array ke characters ko
// Note:* filter arr mein change nhi krega, wo conditions ke according calculate krega aur fir new array dega.

var filter_kr_isse = arr.filter(function(val){
    if(val >= 3) {return true;}
    else return false;
})
console.log(filter_kr_isse);
