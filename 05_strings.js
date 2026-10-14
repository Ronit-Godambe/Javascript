// console.log("");
let a = "RONIT";

console.log(a); // will print "RONIT"

// we can print individual characters too

console.log(a[0]);      // will print 'R'
console.log(a[1]);      // will print 'O'
console.log(a[2]);      // will print 'N'
console.log(a[3]);      // will print 'I'
console.log(a[4]);      // will print 'T'

console.log(a[5]);      // will print 'undefined'

console.log(a.length);  // will print length of the string

let my_name = "Ronit";
let friend = "Mahesh";

// console.log("My name is "+ my_name + " and my friend's name is " + friend);      // will print 'My name is Ronit and my friend's name is Mahesh'

// instead of using the aboves yntax we use this :

console.log(`My name is "${my_name}" and my friend's name is "${friend}"`);     // will print 'My name is Ronit and my friend's name is Mahesh'


let lowercase = "bruh -_-";
console.log(lowercase.toUpperCase());

let uppercase = "BRUH";
console.log(uppercase.toLowerCase());
let foot = "football"
let slice = "Breadcrumb";
console.log(slice.slice(4,9));                  // prints 'dcrum'   --> doesn't include 9
console.log(slice.slice(2));                    // prints 'eadcrumb'  -->
console.log(slice.replace("crumb", "ball"));    // prints 'Breadball'

