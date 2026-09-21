// Arithmetic operator ( 6 types )
let a = 0;
let b = 10;
console.log(a + b); // Addition operator
console.log(a - b); // Subtraction operator
console.log(a * b); // Multipilcation operator
console.log(b / a); // Infinity - Divison operator
console.log(a/b); // 0 - Division operator
// ***Future Topic:
let c = 9;
let d = 2;
console.log(c%d); // 1 Remainder - Modulus operators
let base = 2; // (Base)
let power = 3; // (Exponent)
console.log(base ** power); // 8 - Exponentiation operators


//ai note:
// Pre-increment (++x;) ---> Change first, then use
//ex:1
let x = 5;
// முதலில் x-ன் மதிப்பு 1 கூடி 6 ஆக மாறும், பிறகு y-க்கு வழங்கப்படும்
let y = ++x; 
console.log("x-ன் மதிப்பு:", x); // 6
console.log("y-ன் மதிப்பு:", y); // 6
// விளக்கம்:
// ++ குறியீடு x-க்கு முன்னால் இருப்பதால், JavaScript முதலில் 5-ஐ 6 என மாற்றிவிட்டு, அதன் பிறகே அந்தப் புதிய 6-ஐ எடுத்து y-ல் சேமிக்கும். அதனால் இரண்டுமே 6 ஆக இருக்கும்.

ex:2
// Pre-increment
let count1 = 10;
console.log(++count1); // திரையில் 11 என காட்டும் (உடனடியாகக் கூடிவிட்டது)

//ai note;
// Post-increment (x++;) ---> Use first, then change
//ex:1
let a1 = 5;
// முதலில் பழைய 5 எடுத்து b-க்கு வழங்கப்படும், அதன் பிறகு a-ன் மதிப்பு 6 ஆக மாறும்
let b1 = a++; 
console.log("a-ன் மதிப்பு:", a1); // 6
console.log("b-ன் மதிப்பு:", b1); // 5
// விளக்கம்:
// ++ குறியீடு a-க்கு பின்னால் இருப்பதால், JavaScript முதலில் a-ல் உள்ள பழைய மதிப்பான 5-ஐ எடுத்து b-க்குக் கொடுத்துவிடும். அந்த வேலை முடிந்த பிறகே தனியாக a-ன் மதிப்பை 6 என உயர்த்தும். அதனால் b-ல் பழைய 5 மட்டுமே இருக்கும்; ஆனால் a அடுத்த வரியில் 6 ஆக மாறியிருக்கும்.

//ex:2
// Post-increment
let count2 = 10;
console.log(count2++); // திரையில் 10 என்றே காட்டும் (பழைய மதிப்பை காட்டிய பிறகுதான் கூடும்)
console.log(count2);   // இப்போது பார்த்தால் 11 என மாறியிருக்கும்!





// Assignment operator
const name = "gk"; // Basic Assignment


// Addition Assignment Operator / Compound Assignment).
let num = 10;
num += 18; //  28 --> short formula of num = num + 18
console.log(num);

// Assignment with Unary Plus
let age = 13;
age =+ 18; // 18 
console.log(age);

//// Comparison Operator
let eligibleAge = 18; 
let userAge = 28;
console.log(userAge < eligibleAge ); // false - lesser than
console.log(userAge > eligibleAge ); // true - greater than
console.log(userAge >= eligibleAge); // true - greater than or equal
console.log(userAge <= eligibleAge); // false - lesser than or equal

// Equality Operators:
// == | ===
// == (double equal to checks the value)- Loose Equality
// === (triple equal to checks the value and data-type)- Strict Equality
let myNumber = 18; 
let myString = "18";
console.log(myNumber == myString); // type coercion
console.log(myNumber === myString); // Strict Equality - mostltly preferrable - best way 

// Ternary operator
// ? -> true block : -> false block
Type:1
let loginIn = true;
loginIn ? console.log("login successfully")
: console.log("please login");
Type:2
let mark = 340;
// mark >=345 ? console.log("pass")
// : console.log("fail");
let result = mark >=345 ? "Pass" : "Fail"
console.log(result);
Type:3
let mail = "guna@gmail.com"
mail === "guna@gmail.com" ? console.log("Email Register SuccessFully")
: console.log("Check Your Email");

// Expressions
let userName = "gk";
console.log("You're successfully logged in" + userName); // You're successfully logged ingk - avoid this method
console.log("You're successfully logged in", userName); // You're successfully logged in gk - avoid this method
// backtricks (``) - used this way only global standard
// curly brackets {}
console.log(`You're Successfully Logged in ${userName} Welcome Back `);//