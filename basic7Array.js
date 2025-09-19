// //push pop shift unshift slice splice map filter reduce filter reduce sort indexof
// let arr=[10,20,30,40,50]
// arr.push(65)
// arr.pop()
// arr.shift()
// arr.unshift(35)
// console.log("array is printing")
// for(let i of arr){
//     console.log(i)
// }
// console.log("hello jee kase ho saare")
// let brr=arr.slice(2,4)
// for(let i of brr){
//     console.log(i)
// }
// console.log("using splice")
// let krr=new Array("satyam","sangal","sahab")
// krr.splice(1,2,"Kunal")
// for(let i of krr){
//     console.log(i)
// }


// //map reduce filter
// let drr=arr.map((ele)=>ele*2)
// console.log("using map")
// for(let i of drr){
//     console.log(i)
// }
// let ans=arr.reduce((acc,curr)=>{return acc+curr},0)
// console.log(`reduce sum is ${ans}`)
// console.log("using filter ")
// let err=arr.filter((x)=>(x%2==0))
// for(let i of err){
//     console.log(i)
// }

// let helper=[10,20,"Satyam",35,true,"reduced"]
// console.log(helper.length)
// console.log(helper.indexOf("Satyam"))
// // for(let i of helper){
// //     console.log(typeof i)
// // }
// let frr=helper.filter((ele)=>{
//     return typeof ele=='string'
// })
// for(let i of frr){
//     console.log(i)
// }