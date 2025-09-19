class Human{
   //properties
   //by default memeber public mark hote hai 
   //to make it private put #
   age=13;
   #wt=80;//this properties is marked private 
   //to access private member we use getter and setter
   //this.#wt
   ht=180;
   
   constructor(newage,newheight,newweight){
    this.ht=newheight;
    this.age=newage;
    this.#wt=newweight;
   }
   //behaviour
   walking(){
    console.log(" I am walking with a weight ",this.#wt);
   }
   running(){
    console.log("I am running");
   }
   get fetchWeight(){
    return this.#wt;
   }
   set modifyWeight(val){
    this.#wt=val;
   }
   
}
let obj=new Human();
console.log(obj.age);
obj.walking();
obj.modifyWeight=60;
console.log(obj.fetchWeight);

let obj2=new Human(20,30,40);
console.log(obj2.fetchWeight);

