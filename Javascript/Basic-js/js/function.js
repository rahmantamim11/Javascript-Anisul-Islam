function square (num1, num2) {
    var result = num1 * num2;
    return result;
}

var x = square(5,8);
console.log(x);


function positive (a,b) {
    var result = a + b;
    return result;
}

var sum = positive(8, 77);
console.log(sum);


function negative (c,d) {
    let result1 = c - d;
    return result1;
}

let sum1 = negative(90, 23);
console.log(sum1);

function math (e,f) {
    let result2 = e * f;


    return result2;
}

let sum3 = math(7, 11);
console.log(sum3);

// IIFEs (Immediately Invokeable Function Expressions)

(function display(message) {
  console.log(message);
})('hi');

// Function Expressions
var display2 = function displayMessage(msg) {
    console.log(msg);
  };
  display2("I am message");
  
  // ( ), { }, [ ], < >