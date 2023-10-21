// Array -> is a collection of variables
// Array VS Object -> arrays use numbered indexes. but, objects use named indexes.

// creating an array with 20 variables
var names = new Array(20);

//array index always start with 0
names[0] = "Rahman";
names[1] = "Tamim";

//printing an array elements
console.log(names[1]);

// creating an array with values
var students = ["Rahman", "Tamim", "RT", "Lieu10ant"];
console.log("students = " + students);
console.log("studnet at 2 index : " + students[2]);

//finding the length of an array
console.log("Length of student array : " + students.length);

//pushing an element in array in end
students.push("Facebook");
console.log("after pushing students = " + students);

//Removing an element in array from end
students.pop("Facebook");
console.log("after poping students = " + students);

// concatenation of arrays
var num1 = [10, 20];
var num2 = [30, 40, 50, 60];
var num = num1.concat(num2);
console.log("After concatenation : " + num);