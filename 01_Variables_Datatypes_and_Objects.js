// // console.log is used to view 'things' in console -_- 
// console.log("Hello World!")

// var a = 10;
// var b = 20;
// var c = "Ronit";




// var a = 10;
// var b = 20;
// var c = "Ronit";

// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c);


// a = a + 1;                  // change of value is allowed for var

// const a1 = 24;
// // a1 = a1 + 1;             // NOT ALLOWED




let a = 10;

console.log("a = ", a); // this will shw a = 10

// SAY, we begin a block


{
    let a = 66;
    console.log(a); // this will giv me 66 
}

// BUT - if we write here again, and ask for the value of a, it will show 10 - cuz let xecutes only whatever was in the box...

console.log(a); // We get 6!!!!
 // let is valid only inside its own block.
 


//  There are 7 primitive data types in Jacascript

// 1. null  2. number   3. String   4. Symbol   5. Undefined    6. Boolean  7. bigint


let x = "Ronit";
let y = 22;
let z = 22;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);

console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));


// Objects in javascript


let o = {
    "name":"Ronit",
    "job-code":4913,
    "is-studious":true
}

console.log(o);
// We can edit an object in js by doing this ....
o.salary = "10crores";

//NOW if we print we will get salary included in that particular object too!!

console.log(o);





