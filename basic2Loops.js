//IMPORTANT => if array index is out of bound it print undefined 
//IMPORTANT =>io=> iterable => for of loop 
//loops
//for,while,do-while,nested loop,for in ,for of loop,for each
//advance iteration=> map,filter,reduce 
//break and continue



// // for loop
// for(let i=0;i<10;i++){
//     console.log(i)
// }

// //break
// for(let i=0;i<10;i++){
//     if(i==5){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// //continue
// for(let i=0;i<10;i++){
//     if(i==5){
//        continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// //while loop => when number of iteration is not known
// let i=1
// while( i<6 ){
//     console.log(i);
//     i++;
// }

// //do while => when u want ki atleast ek barr toh loop chale
// let i=1;
// do{
//     console.log(i)
//     i++;
// }while(i<0)


// //for of loop iterables ke liye lagta hai (string,array)
//IMPORTANT =>io=> iterable => for of loop 
// let arr=[10,20,30,40,50]
// let str="Satyam Sangal"
// for(let i of arr){
//     console.log(i)
// }
// for(let i of str){
//     console.log(i)
// }

// //for in loop
// let obj={
//     a:10,
//     walk:console.log("hello jee kase ho saare"),
//     k:(function(){return "hello jess badhiya hai saare "}())
// }
// obj.walk
// console.log(obj.k)
// for(let i in obj){
//     console.log(i)
// }


// //for each loop => (element,index,array)(array should be same array to which u perform iteration)
// // In a forEach callback, the third parameter is the array being iterated over, not any other array you have outside.
// let i=0;
let arr=[10,20,30,40,50,60,70,80,90]
let brr=[11,21,31,41,51,61,71,81]
// //IMPORTANT => if array index is out of bound it print undefined 
// arr.forEach((value,index,arr)=>{
//     console.log(`Index is ${index} and value is ${value}`)
//     console.log(brr[i++])
// })


//advance iteration => map,filter,reduce
// let crr=arr.map((x=>x*2))
// for(let i of crr){
//     console.log(i)
// }
// let drr=arr.filter(x=>(x%3==0))
// for(let i of drr){
//     console.log(i)
// }
let ans1=arr.reduce((accumulate,curr)=>{return accumulate+curr},0)
let ans2=arr.reduce((accumulate,curr)=>{return accumulate*curr},1)
console.log(ans1)
console.log(ans2)