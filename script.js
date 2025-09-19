// node js (frontend mein chal ri yeh and include karne padegi html mein)
console.log("this is my first javascript file");
    // var x=10;
    // let y=20;
    // // when we declare a variable with const keyword we will not reassign a new value to it , if done then it will throw me an error
    // kabhi kabhi hmm chahta hai ki yeh variable kabhi change h na ho so we use const
    // const z=30;
    // // let z=10;

    // var x=10;
    // console.log(x);
    // var x="jai siya ram";

    // var str1="jai siya ram";
    // var str2="jai sita ram";
    // var str3=str1+" "+ str2;
    // console.log(str3);

    // let obj={name:"satyam",age:19}; 
    // obj.age=18;..property value can be changed 
    // console.log(obj);

    // document.title=" hey i am good ";
    // document.body.style.backgroundColor="red"

    // var a=10,b=20;
    // c="hari";//var,let,const should be mentioned 
    // console.log(c)
    // console.log(a+b+8+"hari");

    // // below code will print output in the same line
    // console.log(typeof a,typeof b,typeof c);

    // // below code will print different line 
    // console.log(typeof a);
    // console.log(typeof b);
    // console.log(typeof c);


//     // local variable has higher priority then global variable 
//     // if two variable are declare in different scope then (local variable) > (global variable)
//     console.log(" var has global scope but not block scope while let and const has block scope and global scope");
     
// //1)var has global scope and inside curly braces global var "a" changed it's value
    // var a=10;
    // console.log(a);
    // {
    //     var a=12;
    //     console.log(a);
    // }console.log(a);
//     //var is not block scope , so it violates the block property and update value of a 
//     console.log("from above code we have understood that variable has global scope  ");


    // //2) o/p=10,12,10(let=block scope)
    // let b=10;
    // console.log(b)
    // {//let respect the block scope 
    //     let b=12
    //     console.log(b)
    // }
    // console.log(b)
    
    //4) var=global scope so can be accesed inside curly brace but inside curly braces we have block scope
    // o/p=>10,12,10
    // var a=10;
    // console.log(a);
    // {
    //     let a=12;
    //     console.log(a);
    // }console.log(a);
    // console.log("var has global scope and const and let has block scope so as per scope it will return output ");
    
    //5) this below code is syntax error 
    // let a=10;
    // console.log(a);
    // {
    //     var a=12;
    //     console.log(a);
    // }console.log(a);

    // var a=10;
    // console.log(a)
    // {
    //     let a=20;
    //     console.log(a)
    // }
    // console.log(a)

    // let a=10;
    // let b=10.5;
    // const p=true;
    // let c="satyam sangal";
    // let d=undefined;
    // let e=null;
    // console.log(a,b,p,c,d,e);
    // console.log(typeof a,typeof b,typeof p,typeof c,typeof d,typeof e);
    // null ka type object hoga 
    // null ka type js object denge (js mein bahut pehle se h object bata diya tha lekin bahut jane ise galti bhi manta hai)
    // kyuki ispe bahut saara code relay karta hai so we don't change it 

    let o={
        "name":"satyam sangal",
        "job roll":226
    }
    o.salary="100crores";
    console.log(o);
    console.log(o);
    o["job roll"]=10;
    // o.job roll=10
    // o."job role"=10
    // 😐 how to acces above value