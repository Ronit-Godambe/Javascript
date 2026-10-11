for (let i = 1; i <= 10; i++) {
    console.log("2 x", i ,"=", i*2);
}

console.log(" ");
let j = 1;

while (j <= 10) {
    console.log("3 x", j ,"=", j*3);
    j++;
}

console.log(" ");
let k = 1;

do {
    console.log("4 x", k ,"=", k*4);
    k++;
} while (k<=10);

let obj = {
    name :"Ronit",
    designation :"Programmer"
}




// for in loop
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
    
}



// for of loop - for strings - will learn for arrays later
for (const d of "151515151") {
    console.log(d);
}