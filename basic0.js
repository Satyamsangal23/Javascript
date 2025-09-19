console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//defining big int value
let c1 =
  123124135465764321234567543234764534235621349888888888888888888888888888823145n;
console.log(c1);
console.log(typeof c1);

let a = null;
console.log(typeof a);

let b = 132.4;
let c = 32;
let d = "Satyam sangal";
let e = "satyam ji sangal ji";
let f = undefined;
let g = true;
let h = [1, 2, 3, "satyam ji"];
let obj = {
  a: 10,
  walk: console.log("i am walking"),
  b: (() => {
    console.log("hello jee kase ho saare");
  })(),
};
console.log(
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g,
  typeof h
);
console.table([b, c, d, e, f, g, h, obj]);

console.error("this is error measage");
console.warn("this is warning message");
console.info("this is for information");
console.debug("please debug ur code");



//Assignment Operator (=):
//When you use if (b = 1), it assigns the value 1 to b and then evaluates the condition. Since the assignment always returns 1, the if condition is always true

var b1 = 1;
if (b1 == 2) {
  console.log("yes ur name is satyam sangal i have recoginised u ");
} else {
  console.log("no red handed recoginiton ");
}

//loose equality(only value checking)(==)
let br = "satyam sangal";
let brr = new String("satyam sangal");
if (br == brr) {
  console.log("matched only value not it's type");
} else {
  console.log("both are not same");
}

//strict equality(both value and type checking)(====)
let br1 = "satyam sangal";
let brr1 = new String("satyam sangal");
if (br1 === brr1) {
  console.log("matched data ");
} else {
  console.log("unmatched data because of different datatype");
}

let br2 = "satyam sangal";
let brr2 = "satyam sangal";
if (br2 === brr2) {
  console.log("strict checking with both type and value matching");
} else {
  console.log("equal toh aana chahiya tha");
}

//64 bit precision that's why js doesn't give different datatype like integer and float like in other language
console.log(2/3)