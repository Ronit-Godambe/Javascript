let arr = [1,2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log(arr.length);

console.log("Type of array = " + (typeof arr));     // type of array is an 'OBJECT'  o(*￣▽￣*)ブ 
console.log("arr[2] = " + arr[2]);    // 3
console.log("arr[5] = " + arr[5]);    // 6
console.log("arr[8] = " + arr[8]);    // 9





// arrays are mutable

arr[0] = 23;
console.log("arr[o] = " + arr[0]);  // arr[0]=23




// to convert an array to a string

console.log(arr.toString()); // we get a comma seperated string --> 23,2,3,4,5,6,7,8,9





// Joining array elements with anything

console.log(arr.join(" + ") + ` = ${arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8]}`);
// 23 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 67 -----------here we get the elements of array seperated by '+'


console.log(arr.join("    o(*￣▽￣*)ブ    "));
console.log(arr.join("    -_-    "));





// say later on we want to remove some elements from an array, we use the pop() and shift() function

// pop()   = removes the last element of an array
// shift() = removes the initial element

arr.pop();          // '9' will disappear
arr.shift();        // `23` will disappear
console.log(arr);   // [2, 3, 4, 5, 6, 7, 8]





// say later on we want to add something in an array, we use the push() function

// push()    = adds elements at the end of an array
// unshift() = adds elements at teh start / beginning of an array

arr.push("Ronit", 73);  // `Ronit` and `73` will get added at th end of the array
arr.unshift("BRUHH")    // `BRUHH` will get added at the beginning of the array
console.log(arr);       // [ 'BRUHH', 2, 3, 4, 5, 6, 7, 8, 'Ronit', 73 ]




// to delete an element - (the element vanishes - gets evaporated - leaving empty space)
delete arr[2];
console.log(arr);




// combining multiple strings into one string - concatinating

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
let names = ["Ronit", "Dattatraya", "Godambe"];

console.log(a1.concat(a2, a3, names));      // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Ronit', 'Dattatraya', 'Godambe' ]



// using sort() - used to sort a string

let unsortedstr = [0, 4, 2, 3, 1, 7, 6, 8, 9, 5];
console.log(unsortedstr.sort());


// using splice
//  ask chatgpt  later
let numbers = [1, 2, 3, 4, 5, 6, 7];


numbers.splice(2, 4,); // goes to index 2, and then removes the next 4 numbers/elements
console.log(numbers);  // [ 1, 2, 7 ]

numbers.splice(2, 4);

// LOOPS FOR ARRAYS

let a = [1, 4, 23, 64, 33, 21];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}