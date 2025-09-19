//function scope -> variable is accessible in function only
//block scope -> block scope {} (var  is accessible in only this {} braces)
//global scope -> these are declared in the main memory of the source code,outside all the function
//var are function scoped and globally scoped but not block scope


//1)var
// console.log(x)//undefined
var x=11;
function f(){
    console.log(x)//11 function scope
}
f()
// console.log(x)//11 global scope
{
    // console.log(x)//11 function scope
}

// console.log(x1)//reference error
function f(){
    var x1=11;
    console.log(x1)//11 function scope
}
f()
// console.log(x1)//reference error
{
    // console.log(x1)//reference error
}




// // 2) let
// console.log(y)//undefined
// let y=11;
// function f(){
//     console.log(y)//11 function scope
// }
// f()
// console.log(y)//11 global scope
// {
//     console.log(y)//11 function scope
// }

// console.log(y1)//reference error
// function f(){
//     let y1=11;
//     console.log(y1)//11 function scope
// }
// f()
// console.log(y1)//reference error
// {
//     console.log(y1)//reference error
// }


// // 2) const
// console.log(z)//undefined
// const z=11;
// function f(){
//     console.log(z)//11 function scope
// }
// f()
// console.log(z)//11 global scope
// {
//     console.log(z)//11 function scope
// }

// console.log(z1)//reference error
// function f(){
//     let z1=11;
//     console.log(z1)//11 function scope
// }
// f()
// console.log(z1)//reference error
// {
//     console.log(z1)//reference error
// }




//the behaviour of moving the declaration on top of the script is known as hoisting

// redefinning(dubara define kar diya) -var
//redeclaration(value change kar ra )-var,let
//1)
// var a=10
// console.log(a)
// a=20
// console.log(a)
// var a=30
// console.log(a)
//2)
// let b=10
// console.log(b)
// b=20
// console.log(b)
// let b=30
// console.log(b)
