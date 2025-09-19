//object is dynamic in nature
//what does clonnig actually means to us , if we create new object and changes to that object will not reflect on original one
// let src={
//     age:20,
//     wt:70,
//     ht:180,
//     details:{
//         name:"satyam sangal",
//         job:"developer"
//     }
// }
// console.log(src)
// src.color="white"
// console.log(src)
// //object are dynamic in nature because run-time pr hmm uski property change kar sakta hai
// //********object clonning and there are three ways to clone an object 


// //1)spread operator=>shallow copy 
console.log("... is callled spread operator") 
let dest={...src}
let mediator=src//this is not clonning
//any changes in primitve as well as nested object will be reflected in src also because both are pointing to same reference
src.age=90
dest.age=200//this change will not be reflected in src 
dest.details.name="Sundaram ji "//this change will be reflected in src also because it is nested object and spread operator make shallow copy

// console.log("src ke baat ho rahi hai",src)
// console.log("mediator hu aur meri bhi age ki value change ho gyi src ki age ki value ko change karna se",mediator)
// console.log("destination ki baat ho rahi hai",dest)

//2)assign
// let src1={
//     value:20,
//     name:"SATYAM SANGAL"
// }
// // let dest=Object.assign({},src)
// // src.age=100
// // console.log("mein src hu aur mere age ki value change ho gayi",src)
// // console.log("mein dest hu aur mere age ki value change nahi hogi",dest)

// let mediator=Object.assign({},src,src1)//shallow copy
// console.log(mediator)

// //3)iteration
// let dest={}//deep copy any changes made in src will not affect dest , this is what we required in copying 
// for(let key in src){
//     let newkey=key;
//     let newvalue=src[key];
//     //insert newkey and value in dest and create a clone
//     dest[newkey]=newvalue
// }
// src.age=110;
// console.log("mein src hu",src)
// console.log("men dest hu ",dest)

//garbage collector= in this we free the allocated memory so again memory usage is possible ,speed increase karna ke liya,and memory leaks se bachna ke liya
//we have no control on garbage collector and run by default in background