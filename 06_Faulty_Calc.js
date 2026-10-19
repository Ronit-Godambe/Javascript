/*
This is a Faulty Calculator which performs the following wrong calculations 10% times:

+    -->   -
*    -->   +
-    -->   /
/    -->   **

(numbers are taken as an input from the user)

*/



let random = Math.random();

console.log(random);
let num1 = prompt("Enter initial number")
let operation = prompt("Enter Operation")
let num2 = prompt("Enter another number\n Operations: '+' ,  '-'  , '*'  , '/'  , '**'  ")
let obj = {
"+" : "-",
"*" : "+",
"-" : "/",
"/" : "**"
}



if (random>0.1) {
    // Perform correct operation
    console.log("Correct operation performed");
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
} 

else {
    // Perform wrong operation
    let c = obj[operation];    
    alert(`The result is ${eval(`${num1} ${c} ${num2}`)}`);
}