/*

console.log("My name is Ronit.");
console.log("Ronit works from his house");
console.log("Ronit built this");
console.log("Ronit built that");

*/


// say i want to change the word "Ronit" to "Bot" or anything else i will have to do it individually
// this is where we use functions, suppose in a big code, where a task or syntax is being repeated again and again, we can find a common thing in that task and make a function!

function func_for_name(name) {
    console.log("\nMy name is " + name + ".");
    console.log(name + " works from his house.");
    console.log(name + " built this.");
    console.log(name + " built that.\n");
}

func_for_name("BRUHH");
func_for_name("Ronit");


function sum(a,b,c=3) {
    // console.log("Sum of " + a + " and " + b + " is " + (a+b));
    return a+b;
}

// sum(2,1);

console.log("Sum of 2 and 1 is " + sum(2,1));


result1 = sum(2,3);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);


console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);


const yo = (x)=>{
    console.log("this is an arrow function", x);

}

yo("34")
yo("44")
yo("54")
yo("64")
