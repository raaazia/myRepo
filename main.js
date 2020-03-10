//console.log("hello world");
// const a=10;
// const b=20;
// c=a+b;
// console.log("Total of a plus b="+c)
// objects
// var users={name:"RAAZIA",age:28,email:"raazia@gmail.com"}
// console.log(users)
//anonymous function
// var person=function(){
//     console.log("this is anonymous function")
// }
// with parameters
// var person=function(a,b){
//     var c=a+b;
//     console.log("addition of a and b="+c)
// }
// person(4,5);
// arrow functions
// var users=()=>console.log("this is arrow function")
// users();
var name="paradeep";
var users=(a,b)=>{
    var c =a+b;
    console.log(`addition of ${a} and ${b} = ${c}`);
}
users(4,5);
 module.exports.abc=name;