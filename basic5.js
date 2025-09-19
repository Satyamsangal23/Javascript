//shallow copy and deep copy
//reference type=object,array,function

//object=> collection of key value pair
// let obj={
//     name1:"satyam sangal",
//     class:12,
//     age:12,
//     //anonymous function
//     Walk(){
//         console.log("Am i walking ")
//     },
//     //function expression
//     greet:function(){
//         console.log("hlo jee kesa ho saare")
//     },
//     //arrow fucntion
//     greet2:()=>{
//         console.log("greeting of the day")
//     }
// }
// obj.Walk()
// obj.greet()
// obj.greet2()


// let obj1={
//     name:"Satyam Sangal",
//     age:20,
//     sex:"Male",
//     fun(){
//         console.log("clear definition of class ")
//     },
//     greet:function(){
//         console.log("function definig in the old js way")
//     }
// }
// console.log(obj1)
// let obj2=obj1
// console.log(obj2)
// obj2.name="priyanshu ji sangal"

// let obj3={...obj1}//deep copy
// obj3.name="priyanshu ji"
// console.log("name is ")
// console.log(obj1.name)

// console.log(obj)
// obj.greet()//function calling of object
// console.log(typeof (obj))
// let obj2=obj;//shallow copy
// console.log(obj2)

//CLASS=>state/properties,behaviour/functionality //class is the blueprint of an object 
//object=> it is the instance of the class
//function can be accessed with the help of dot operator
// class human{
//     //properties
//     age=13;
//     wt=80;
//     ht=180;

//     //behaviour
//     walking(){
//         console.log("i am walking isn't")
//     }
// }
// let obj=new human()//creation of instance of class(object)
// console.log(obj)//human { age:13, wt:80, ht:180}
// console.log(obj.wt)//80
// obj.walking()//i am walking isn't(accessing function of a class )

//when we create a properties then by default they are marked public

// class human{
//     //properties
//     age=13;
//     #wt=80;//marked private by #
//     ht=180;

//     //behaviour
//     walking(){
//         console.log("i am walking isn't")
//     }
//     //accessing private member of a class
//      getter(){
//         return this.#wt//accessing private member of class
//      }
//      setter(weight=80){
//       this.#wt=weight
//      }
//      constructor(newage,newheight,newweight){
//         this.age=newage
//         this.#wt=newweight
//         this.ht=newheight
//      }

// }
// let obj=new human()//creation of instance of class(object)
// //u are not giving value to class member that's why it is undefined 
// console.log(obj)//human { age:13, wt:80, ht:180}
// console.log(obj.getter())//undefined(if getter is not used ) else(80 as getter is used ) 
// obj.walking()//i am walking isn't(accessing function of a class )
// //then how to access private member of class value=> using getter and setter
// obj.setter()
// console.log(obj.getter())//20

// // let obj1=new human(10,30,20)
// // console.log(obj1)
