//default nature of parameter in function 
//function is called first citizen because of the following reason
//passing null undefines as parameter value , passing array,obj,default parameter,and dependency on one of parameter


//1 i)
// function sayname(myname="SATYAM SANGAL"){
//     console.log(`my name is ${myname}`)
// }
// sayname()
// sayname(null)//my name is null
// sayname(undefined)//** my name is SATYAM SANGAL//undefined means no value is passed so default value is taken 
// //1 ii)
// sayname("sangal satyam")

// //2 dependency on one of parameter
// function sayname(fname="satyam ",lname=fname.toLowerCase()){
//     console.log(`my name is ${fname,lname}`)//my name is satyam(for no argument)
//     console.log(`my name is ${fname} ${lname}`)//my name is satyam satyam (for no argument)
// }
// sayname()
// sayname("satyam sangal")

// //3) passing object as parameter 
// function sayname(value={age:10,wt:80,ht:180}){
//     console.log("age is ",value.age,"weight is ",value.wt,"height is ",value.ht)
// }
// sayname()
// console.log("hello calling ")
// sayname({wt:81,age:11,ht:184})
console.log("call failed")

// // sayname(pass={11,81,182})//how to change its parameter value 😐

(function(){
    console.log("i am immediately invoked function expression");
})();

// //4) passing  array as parameter
// function sayname(value=["satyam ","sangal"]){
//     console.log(`my name is ${value[0]} ${value[1]}`)
// }
// sayname()

// sayname()//how to change parameter value 😐

//5) passing function
// function age(){
//     //age=20 //***then it will print undefined 
//     return 1020
// }
// function sayname(name="satyam sangal",age1=age()){
//     console.log(`my name is ${name} and my age is ${age1}`)
// }
// sayname()