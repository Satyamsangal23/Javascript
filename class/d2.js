// function print(name,age,city){
//     console.log(`my name is ${name}, I am ${age} years old , and I live in ${city}`)
// }
// print("Satyam Sangal",19,"Shamli")

function swap(a,b){
    var temp=a;
    a=b;
    b=temp;
    console.log(`swapped numbers are ${a} and ${b}`)
}
swap(a=2,b=3)
console.log(`swapped numbers are ${a} and ${b}`)

// function numbers(a){
//    for(var i=1;i<=a;i++){
//     console.log(`my numbers are ${i}`)
//    }
// }
// numbers(20)

// function sum(a){
//     var i=1,sum=0;
//     while(i<a){                                                                      
//         sum+=i;
//         i++;
//     }
//     console.log(`my sum is ${sum}`)
// }
// sum(20)

// var product=(a,b)=>a*b
// console.log(`my product is ${product(2,3)}`)

a=23
var even_odd;
 even_odd=(a%2==0)?1:2
if(even_odd()=="1"){
    console.log("even number")
}
else{
    console.log("odd number")
}

 var a=10;
 var b=20;
 var max;
 max=(a>b)? a:b
 console.log(max)

// var even_odd=(a%2)?console.log("even number"):console.log(`odd number`)
// even_odd(23)