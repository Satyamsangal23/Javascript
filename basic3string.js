//jai siya ram

// //string declaration
// let str1="satyam"
// let str2=new String("satyam")
// console.log("first string type ",typeof(str1),"second string type ",typeof(str2))


//backticks allows multi line string
//str3[0]=str3[20]=str3[7]=str3[13]=' '

// let str3=`
// satyam
// kumar
// sangal
// `
// console.log(str3)

// //string length(there is not size)
// console.log(str3.length)

// //accesing character 
// console.log(str3[13],str3.charAt(13))

// //string methods
// console.log(str3.toUpperCase())
// console.log(str3.toLowerCase())

// //trimming
// let str4=" hello "
// console.log(str4.trim())
// console.log(str4.trimStart())
// console.log(str4.trimEnd())

//searching
// console.log(str4.indexOf("hello"))
// console.log(str4.lastIndexOf("hello"))
// console.log(str4.includes("hello"))
// console.log(str4.startsWith(' '))
// console.log(str4.endsWith(''))

// //string immutability
// str4[0]="ram"//does nothing
// console.log("does changes to shri ram")
// console.log(str4)

// //converting between string and number
// console.log(Number('123'))
// console.log(typeof String(123))

// //escape character 
// console.log("\"Jai siya ram\"")
// console.log("''")
// console.log("\\BackSlash\\")
// console.log("hello\nworld")

// //string comparison
// let a="abc"
// let b="ABC"
// console.log(a.toLowerCase()===b.toLowerCase())


// //replacing
// //string in js are immutable , that means .replace() doesn't change the original string
// let new_string=a.replace("abc","sita ram")
// console.log(new_string)

// //splitting and joining
// let str5="mango apple banana papaya"
// let arr=str5.split(' ')
// for(let i of arr){
//     console.log(i)
// }
// let str6=arr.join(',')
// console.log(str6)

// //substring 
// let str7=str5.substring(6,10)
// //end-1
// console.log(str7)

//operation performed on string
let strr1="satyam "
let strr2="sangal "
console.log(strr1+strr2)