//Varibale=>named memory location
//var is not block scoped , it is global scoped and function scoped 
//let =>let is block scope and block scope and function scoepe
//const=> block 

// console.log(x)//ReferenceError x is not defined 


// //var
// // 1)Redefinition
// console.log("redefinition")
// var a=10;
// console.log(a)
// var a=30;
// console.log(a)
// // 2)Reassignment
// console.log("reassignment")
// a=50
// console.log(a)
// //3) global scope
// console.log("global scopping")
// console.log(b)//undefined 
// var b=50
// console.log(b);
// //4) block scope nahi hota
// console.log("block scopping")
// console.log(c)
// {
//     var c=30;
// }
// console.log(c)
// // 5)function scopping
// console.log("function scope")
// // console.log(d)//ReferenceError
// function f(){
//     var d=45
//     //faded d represent d is never used but we have above and below the function means they are out of scope
// }
// // console.log(d)///ReferenceError



// //let 
// // 1)redefintion
// console.log("redefinition ")
// let a=30
// // let a=40//SyntaxError
// // 2)Redeclaration
// console.log("redeclaration")
// let b=30
// b=40
// // 3) global scope
// console.log("global scope")
// {
//     console.log("inside block")
//     console.log(b)
// }
// (function f(){
//     console.log("inside function")
//     console.log(b)
// }())
// if(true){
//     console.log("inside if-else block")
//     console.log(b)
// }
// // 4) block scope
// console.log("block scope")
// // console.log(c)//ReferenceError
// {
//     let c=30
// }
// console.log(c)//referenceError
// // 5) function scope
// console.log("function scope")
// // console.log(d)//ReferenceError
// function f1(){
//     let d=31;
// }
// f1()
// // console.log(d)//ReferenceErorr



// //3) Const
// // 1)redefinition
// console.log("assignment should be done with definition")
// console.log("redifinition")
// const a1//SyntaxError
// const a=30;
// // const a=40//SyntaxError
// //2) reassignment
// console.log("reassignment")
// const b=30
// b=45//TypeError
//3)global scope
// console.log("global scope")
// const c=46
// above, in Node.js (v22 in your case), top-level const and let are not always treated like "pure globals".
// They live in the module scope.
// When you wrap code in a function (IIFE), Node.js sometimes treats the variable as being in the TDZ (Temporal Dead Zone) until the declaration line has been executed.
// (function f(){
//     console.log("inside function")
//     console.log(c)//temporal dead zone
//     console.log("after function")
// }())
// function f(){
//     console.log("inside function")
//     console.log(c)
// }
// f()
// if(true){
//     console.log("inside if-else block")
//     console.log(c)
// }
// {
//     console.log("inside block ")
//     console.log(c)
// }
// //4) block scope
// console.log("block scope")
// // console.log(d)// ❌ ReferenceError (TDZ: d not initialized yet)
// {
//     const d=46
// }
// // console.log(d)//ReferenceError d is not defined i.e temporal dead zone
//5) function scope
// console.log("function scope")
// console.log("using immediately invoked function IIFE")
// console.log(e)//Reference error=>tdz
// (function f(){
//     const e=47
// }())
// console.log(e)//ReferenceError



//hoisting => means moving the declaration on top of the script , voilates temporal dead zone
//the behaviour of moving the declaration on top of the script is known as hoisting

//temporal dead zone 
// The Temporal Dead Zone is the time between:
// When a variable is hoisted into scope
// When it is actually initialized with a value
// During this period, if you try to access the variable → you get a ReferenceError.



// // console.log(marks)//marks is not defined before this line -> this is temporal dead zone
// let marks=100;
// console.log(marks)//100
// {
//     console.log(marks)//100
// }
// console.log(marks)//100

// // console.log(marks)//marks is not defined =>temporal dead zone
// const marks=100;
// console.log(marks)//100
// {
//     console.log(marks)//100
// }
// console.log(marks)//100

// console.log(marks)//undefined //hoisting is there in case of var
// var marks=100;c
// console.log(marks)//100
// {
//     console.log(marks)//100
// }
// console.log(marks)


//global object property
//global object property is the property that the variable and function belongs to the global object , when u try to acces with the global object then var is only accesibel
// global object property is the property (variable or function) that belongs to global object
// var is added to global object property
// let and const are not added to global object property
// var a=10
// console.log(window.a)//10
// let b=20
// console.log(window.b)//undefined
// const c=30
// console.log(window.c)//undefined

//in js global object is window 
//in node js global object is global
//in web worker global object is self

// var can be name of object property
// let f={
//     var:10
// }
// console.log(f.var)




// cons of var 
//var can't be the name of variable,function name,class name,
// var can be used as object property name
let obj={
    var:10
}
console.log(obj.var)


// normal function hoisting is there 
//function expression hoisting depends on type of variable u used (let aur const ki hosting nahi hoti,var ki hosting hoti hai)

// let obj2=new human() //class hosting is not there 
class human{
    person(){
        console.log("i am person")
    }
    walking(){
        console.log("i am walking")
    }
    brr=25
    
}