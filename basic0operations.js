//operator and precedence
 
// 🌟 Arithmetic Operators(+,-,*,/,**(exponent),%,++,--(increment and decrement(can be pre or post ))
// 📍Assignment Operators(>=,<=,>,<,==,!=,!==,===)(true or false)
// // strict equality (value and datatype should be same)(===)
// //loose equality(==)(value should e same but datatype may or not be same )
// console.log(3=="3");//true
// console.log(3==="3")//false
// console.log(3==3)//true
// console.log(3===3)//true
// console.log(3===3.0)//true**********            MOST IMPORTANT
// console.log(3===3)//true
// console.log("3"!=3)//false
// console.log("3"!==3)//first value is checked and then datatype is checked//true

// == (loose equality): Compares values for equality after converting both values to a common type.

// === (strict equality): Compares both value and type.

// != (loose inequality): Compares values for inequality after converting both values to a common type.

// !== (strict inequality): Compares both value and type for inequality.


// 🌟Comparison Operators

// 📍Logical Operators
// console.log(2&&3)
// console.log(2 || 3)
// console.log(1>2 && 1>3)//false
// console.log(1<2 || 1>3)//true
// console.log(true && true)//true
// console.log(false && true)//false
// console.log(true || true)//true
// console.log(false || true)//true

//*********jis value pr final hui uss value ke aage check nahi karenga uski truthness and falseness 

// console.log(false && "helloji")//false
// console.log(true || "helloji")//true
// console.log(true && "helloji")//helloji
// console.log(false || "helloji")//helloji
// console.log(false && 7)//false
// console.log(true || 7)//true
// console.log(true && 7)//7
// console.log(false || 7)//7
// console.log(!2)//false
// console.log(!0)//true
// console.log(!1)//false
// console.log(false||7||11||18||21)//7 
// console.log(2 and 3)//******        MOST IMPORTANT   *****error(JavaScript does not have and and or keywords for logical operations. Instead, JavaScript uses && for logical AND and || for logical OR.)
// console.log(2 or 3)//error(JavaScript does not have and and or keywords for logical operations. Instead, JavaScript uses && for logical AND and || for logical OR.)

//short circuiting=>
//pehle h output mill gya toh pehle h return kar jayenga pura check h nahi karega 
// console.log(false||false||true||false)//true
// console.log(true&&false&&true&&false)//false
// console.log(false||7||true||false)//7
// console.log(false||true||7||false)//true
// console.log(true&&7&&true&&true)//true
// console.log(true&&7&&true&&false)//false

// 🌟Bitwise Operators
// console.log(2&5)//0
// console.log(2|5)//7
// console.log(2^5)//7
// console.log(~5)//-6
// console.log(~0)//-1
// console.log(5<<2)//left shift a*(2**b)
// console.log(5>>2)//right shift a/(2**b)

// // 📍Ternary Operators
// let age=18
// let status1=(age>=18)?("eligible for voting"):("not eligible for voting")
// console.log(status1)

// falsey and truthy concept

// falsey->undefined , null ,0 , false , NAN , ''
// truthy = anything which is not falsey


// switch(operator){
//     case '+':
//         console.log(`sum of two number i.e ${num1} + ${num2}= ${num1+num2}`)
//         break;
//     case '-':
//         console.log(`subtraction of two number i.e ${num1}-${num2} =${num1-num2}`)
//         break;
//     case '*':
//         console.log(`multiplication of two number i.e ${num1}*${num2} =${num1*num2}`)
//         break;
//     case '/':
//         console.log(`division of two number ${num1}/${num2}=${num1/num2}`)
//         break;
// }
