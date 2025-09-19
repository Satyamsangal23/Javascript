//when we copy an object we expect that changing one object doesn't change original object 
let obj1={name:"Satyam Sangal",age:22,details:{height:200,weight:80}}

//reference copy=>any changes made will be reflected in original one infact both will point to same reference 
let obj2=obj1;
obj2.name="priyanshu"
obj2.details.height=160
console.log("object1 is ",obj1)
console.log("object2 is ",obj2)
//reference is same

//shallow copy=>changes made in primitive type will not be reflected in original one but changes made in nested object will be reflected in original one
let obj3={...obj1}
obj3.name="priyanshu ji"//no change as primittive type, changes will be displayed in nested 
obj3.details.weight=90
console.log("object1 is ",obj1)
console.log("object3 is ",obj3)

//deep copy
let obj4=structuredClone(obj1)
obj4.name="priyanshu ji sangal"
obj4.details.height=150
console.log("object1 is ",obj1)
console.log("object4 is ",obj4)


let obj5=Object.assign({},obj1)
obj5.name="Shivam"
obj5.details.weight=25
console.log("object1 is ",obj1)
console.log("object5 is ",obj5)


