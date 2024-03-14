// ************************************ Next Chapter ************************************

// Chapter 31 - 34 (Date & Time)

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

var dObj = new Date();

console.log(dObj);

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
var date = new Date();

var dStr = date.toString();

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

var d = new Date().toString();

var day = d.slice(0, 4);

console.log(day);

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

var d = new Date().getDay();
var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];

var currentDay = dayNames[d];
console.log(currentDay);

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.

var date = new Date();
console.log(date);

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

var date = new Date("Dec 31, 2020");
console.log(date);

// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

var date = new Date("feb 2, 1992");

console.log(date);

// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

alert(new Date("jan 01, 1998").getTime() - new Date().getTime());

// 9. How do you change the year of a date in JavaScript?

var date = new Date();

var changeYear = date.setFullYear(2005);

// 10. Write a JavaScript function to change the month of a given date to January.

function changeMonth(month) {
  var date = new Date(month);
  console.log(date);
}
changeMonth("2008");

// 11. What is the method to change the day of the week for a specific date in JavaScript?

var date = new Date();
var changeDay = date.setDate(5);

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
var mins = prompt("Enter Mins");

function addMins() {
  var date = new Date();
  date.setMinutes(mins);
  console.log(date);
}
addMins();

// 13. Write a JavaScript function to add a specific number of hours to a given time.

var hours = prompt("Enter No of Hours you wanna Add");

function setHours() {
  var date = new Date();
  date.setHours(hours);
  console.log(date);
}
setHours();

// 14.You have to create a age calculator in JavaScript.

var userAge = new Date("feb 28, 2006");
var userAgeMili = userAge.getTime();

var today = new Date();
var todayMili = today.getTime();

var diff = todayMili - userAgeMili;

var accurateAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

console.log(accurateAge);

// ***************************************** Next Chapter *************************************************

// Chapter 35 - 37 (Functions)

// 1. Code the first line of a function displayAlert.

function displayAlert() {}

// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.

function askName() {
  var userName = prompt("Enter Name");
}

// 3. Code a function that calls 2 other functions.

function callFun() {
  firstFun();
  secondFun();
}

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.

function askName() {
  var userName = prompt("Enter Name");
  alert(userName);
}
askName();

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.

function concat(alphabet, string, number) {}

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.

function twoParameters(a, b) {
  var result = a + b;
}

// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.

function threeParameters(first, second, third) {
  var result = first * second * third;
}

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.


// 9. Write a JavaScript function that takes two parameters and returns
// their sum

function numberSum(firstNum, secondNum) {
  var result = firstNum + secondNum;
}

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

function average() {
  var a = 10;
  var b = 26;
  var c = (a * b) / 100;
  return c;
}

// 11. You have to capture the returned value from a function and
// store it in a variable?

function valueReturn() {
  var a = 23;
  var b = 68;
  var c = a + b;
  return c;
}
var f = valueReturn();
console.log(f);

// 12. Write a function which tells letter counts of (word).

var word = prompt("Enter Word");

function counter() {
  word = word.length;

  console.log(word);
}

counter();

// 13. Write a function to set (year) in date object.

function year() {
  var changeYear = +prompt("Enter Your Year");
  var date = new Date();
  var d = date.setFullYear(changeYear);

  console.log(d);
}
year();

// 14. Write a function which tells the age of a person who Born on (dateOfBirth)

function ageCalcu() {
  var userYear = prompt("Enter Your Date of Birth", "feb 28, 2006");
  var userAge = new Date(userYear);
  var userAgeMili = userAge.getTime();

  var today = new Date();
  var todayMili = today.getTime();

  var diff = todayMili - userAgeMili;

  var accurateAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

  console.log(accurateAge);
}
ageCalcu();

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

var array = [
  "zaid",
  "haris",
  "raza",
  "abubakar",
  "hassan",
  "hussain",
  "fatima",
];
var found = false;

function findVal() {
  var userName = prompt("Enter Your Name to check list.");
  for (var i = 0; i < array.length; i++) {
    var finalName = userName.toLowerCase();
    if (array[i] === finalName) {
      found = true;
      alert("User Name Found!");
      break;
    }
  }
  if (!found) {
    alert("User Name Not Found");
  }
}
findVal();

// 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10);

function wordCount() {
  var string = prompt("Enter String to check Number.");
  return string.repeat(10);
}

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()

var array = ["a", "b", "c", "d", "e"];

function reverse() {
  return array.reverse();
}
var x = reverse();
console.log(x);

// ************************************ Next Chapter ****************************************

// Chapter 38 (Local vs. Global Variables)

// 1. Write a JavaScript function that demonstrates the usage of a local variable.

function usage() {
  var a = 10; // This veriable is brasis {} Scoped AKA local scope
}
console.log(a); // we can't access that veriable here.

// 2. How can you access a global variable inside a function in JavaScript?

var a = 24; // Now this is a global veriable means we can use it anywhere in our code.

function add(b) {
  console.log(a + b);
}
add(25);

// ***************************** Next Chapter *********************

// Chapter 39, 40 (Switch Statements)

// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.

var myName = "Waleed";

switch (myName) {
  case "Waleed":
    alert("User Name is Waleed");
    break;
  case "ahmed":
    console.log("Welcome Ahmed");
    break;
  default:
    alert("Not a User");
    break;
}

// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

var cityName = prompt("enter your city name");

switch (cityName) {
  case "karachi":
    alert("The city of lights");
    break;
  case "lahore":
    alert("Beautiful city");
    break;
  case "islamabad":
    alert("Capital of Pakistan");
    break;
  default:
    alert("City not found!");
}

// *************************** Done **********************************


// Function Chapter Question: 08
