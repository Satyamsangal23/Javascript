//jai jai siya ram
//FUNCTION =>
    
//default nature of parameter in function
//passing null undefines as parameter value , passing array,obj,default parameter,and dependency on one of parameter
//1 i)
// function sayname(myname="SATYAM SANGAL"){
//     console.log(`my name is ${myname}`)
// }
// sayname()
// sayname(null)//my name is null
// sayname(undefined)//** my name is SATYAM SANGAL
//1 ii)
// sayname("sangal satyam")
//2 dependency on one of parameter
// function sayname(fname="satyam ",lname=fname.toLowerCase()){
//     console.log(`my name is ${fname,lname}`)//my name is satyam(for no argument)
//     console.log(`my name is ${fname} ${lname}`)//my name is satyam satyam (for no argument)
// }
// sayname()
// sayname("satyam sangal")
//3) passing object as parameter
// function sayname(value={age:10,wt:80,ht:180}){
//     console.log("age is ",value.age,"weight is ",value.wt,"height is ",value.ht)
// }

// function getAverage(a,b){
//     console.log(a+b)
// }
// getAverage(3,4)

// //function returning function
// function f(a){
//     return function(a){
//         return function(a){
//             return a*a;
//         }
//     }
// }
// let ans1=f(3)
// let ans2=ans1(4)
// let ans3=ans2(5)
// console.log(ans3)

// //function expression
// const ans4=function(){
//     console.log("hello jee kase ho saare")
// }
// ans4()

// //arrow function
// const ans5=(a,b)=> a+b;
// const ans6=(a,b)=>{return a+b}
// console.log(ans5(3,4))
// console.log(ans6(3,4))

//we can define one function into another function
// function f() {
//   console.log("hey this is Satyam Sangal , what's ur name ");
//   function anotherf() {
//     console.log("I am fine, what about you ?");
//   }
//   anotherf();
// }
// f()
//u can access insider function outside the outsider function just return insider function

// //parameter passing function
// function f(firstname,lastname){
//     return firstname+" "+lastname
//     // unreachable statements
//     let c=35
//     console.log(c)
// }
// console.log(f("satyam ","sangal "))

// //parameter dependent 
// function f2(firstname,secondname=firstname.toUpperCase()){
//     console.log(firstname+secondname)
// }
// f2("satyam")

// let arr=[(a,b)=>a+b,(a,b)=>a-b,(a,b)=>a*b,(a,b)=>a/b,(a,b)=>a**b]
// let sum=arr[0]
// let sub=arr[1]
// let mul=arr[2]
// let div=arr[3]
// let exp=arr[4]
// console.log(sum(3,4))
// console.log(sub(3,4))
// console.log(mul(3,4))
// console.log(div(3,4))
// console.log(exp(3,4))
    
// //passing array to the function
// function frr(arr){
//     for(let i of arr){
//         console.log(i)
//     }
// }
// let arr=[10,20,30,40,50]
// frr(arr)


// // function call stack
// function d(){
//     console.log("d function is running")
// }
// function c(){
//     d()
//     console.log("c function is running")
// }
// function b(){
//     c()
//     console.log("b function is running")
// }
// function a(){
//     b()
//     console.log("a function is running")
// }
// a()
// // function call stack a(),b(),c(),d()


//function is called first class citizen
//it can be assign to a variable,as argument,return function,use function in ds,as property

// function f(greet,fullname){
//     greet()
//     console.log(fullname)
// }
// f(greet,"Satyam Sangal")
// function greet(){
//     console.log("Good afternoon sir")
// }


// //IMPORTANT =>                                  IIFE (Immediately invoked function Expession)

// (function f(){
//     console.log("Ram Ram ji")
// })();  //(delimeter , ends the IIFE)

// (()=>{
//     console.log("RAM RAM JI")
// })()

//nested function => nested function is only possible with js not with c,c++(not directly but can be done using gcc compiler),java(lambda expression can be there) 
function f1(){
    function f2(){
        console.log("hello jee");
    }
    f2()
}
f1()