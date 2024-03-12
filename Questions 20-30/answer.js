// Chapter 21 (Changing Case)

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase; Note: Correct this statement by yourself.

var allLowerCase = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable

var x = "WaLeeD";
x = x.toLowerCase();
console.log(x);

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.

var y = "ahmed";
y = y.toUpperCase();
console.log(y);

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

var myName = "Waleed Ahmed";
var finalName = myName.toLowerCase();
console.log(finalName);

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

var arr = ["WALEED", "AHMED"];
var myName = arr[0].toLowerCase();
console.log(myName);

// 6. Display in an alert the upper-case version of the string
// represented by a variable.

var myName = "waleed ahmed";
alert(myName.toUpperCase());

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

var cityName = "kaRacHi";

var cityName1 = cityName.slice(0, 1).toUpperCase();

var cityName = cityName.slice(1).toLowerCase();
var cityName = cityName1 + cityName;

console.log(cityName);

// ************************************* Next Chapters *****************************

// Chapter 22 - 25 (Strings)

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

var sameWords = "captian";

sameWords = sameWords.slice(1, 3);

// 2. The number of characters in the string will be assigned to the
// variable

var sameWords = "captian";

var finalWord = sameWords.slice(1, 3);

console.log(finalWord);

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

var animal = "elephant";

var seg = animal.slice(2, 6);

console.log(seg);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

var para = "this is me waleed ahmed";

var myName = para.length;

console.log(myName);

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var str = "waleed ahmed";

var firstStr = str.slice(0, 1);
var lastStr = str.slice(9, 12);

var final = firstStr + lastStr;
document.write(final);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.indexOf("be");

// Answer = 3;

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// Answer = 16;

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

var txt = "we are going to a park. Ali wanna go with us";
var indx = txt.lastIndexOf("go");

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

if (indexNum.slice(i, i + 5) === "ahmed") {
}

// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)

var txt = "abcde";

console.log(txt.charAt(2));

// Answer = c;

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

var myName =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum reprehenderit neque?";

var cha = myName.replace("illum", "text");

// Answer = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur waleed reprehenderit neque?"

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

var str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum reprehenderit neque?";

console.log(str.indexOf("neque"));

var x = str.slice(86, 91);

// Answer = Will copy the last character and assigns to x. ///  neque

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

var input = "Lorem, ipsum dolor sit amet.";

console.log(input.indexOf("amet"));

var cha = input.slice(23, 27);

console.log(cha);

// answer = amet

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character

var input = "Lorem, ipsum dolor sit amet.";
console.log(input.indexOf("dolor"));
for (var i = 0; i < input.length; i++) {
  if (input.slice(13, 13 + 5) === "dolor") {
    alert("It's Dolor");
    break;
  }
}

// 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.

var input = "Lorem";
var arr = [];
var value;
for (let i = 0; i < input.length; i++) {
  value = input.slice(i, i + 1);
  arr[i] = value;
}
console.log(arr); // ['L', 'o', 'r', 'e', 'm']

// In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand

var reply = "My answer to your proposal is NO!";
var revisedReply = reply.replace("NO!", "YES!");

console.log(revisedReply);

// 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.

var str = "there is only 1 member. who is good with JS";

var newStr = str.replace("1", "one");

console.log(newStr);

// 17. If you want all instances replaced, enter 3 characters that need to appear in this statement.
// var y = x.replace("a", "z");

var y = x.replace(/a/g, "z"); // 3 characters are {/(string)/g}

// ******************************* Next Chapter *****************************************

// Chapter 26 (Rounding Numbers)

// 1. Form a statement that rounds a number to the nearest integer.

var num = 23.54454;

var num = Math.floor(num);

console.log(num);
// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

var origNum = 55156.489948115;

var roundNum = Math.round(origNum);

console.log(roundNum);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.

var num1 = 0.5;

var num2 = Math.floor(num1);

console.log(num2); // answer = 0;

// ************************************ Next Chapter ******************************************

// Chapter 27 (Random Numbers)

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50

var randomNum = Math.random() * 50;

console.log(randomNum);

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.

var myRandomNum = Math.random();

// 3. You have to create a dice in JavaScript with the use of pseudorandom number

var diceNum = Math.random() * 6;

diceNum = Math.floor(diceNum) + 1;

console.log(diceNum);

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.

var tossNum = Math.random() * 2;
var finalNum = Math.floor(tossNum);

if (finalNum === 0) {
  alert("Heads Win");
} else {
  alert("Tails Win");
}

// ******************************************** Next Chapter ****************************

// Chapter 28, 29 (Converting Strings)

// 1. How do you convert a string to an integer in JavaScript?

// Answer => By Using JS given Meathods such as {(parseInt) & (Number())}
var num = "25";

num = Number(num);

num = parseInt(num);

// Answer => 25 Number

// 2. Write a JavaScript function to convert the string "123" to an
// integer.

var num = "123";

num = parseInt(num);

// Answer => 123 Number

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?

var num = "11.253698";

var floatNum = parseFloat(num);

// Answer => 11.253698 Number

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

var num = "11.253698";

var type = typeof num;

// Answer => Before conversion we will check it's type.

// 5. How can you convert a number to a string in JavaScript?
var num = 256;

var stringNum = num.toString();

console.log(stringNum);

// 6. Write a JavaScript function to convert the number 42 to a string.
var myNum = 42;

var finalNum = myNum.toString();

console.log(finalNum, typeof finalNum);

// 7. Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?

var stringNum = "3.14";

var finalNum = parseFloat(stringNum);

console.table(stringNum, typeof finalNum, stringNum, typeof stringNum);

// *************************************** Next chapter *****************************************

// Chapter 30 (Controlling the length of decimals)

// 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

var num1 = 1.22568844542;

var num2 = num1.toFixed(4);

// ToFixed Returns a String

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

var num = 25.23356454;

num = Number(num.toFixed(2));

console.log(num);

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

var num = 54545.548484;

var str = num.toString();
if (str.charAt(str.length - 1) === "4") {
  str = str.slice(0, str.length - 1) + "3";
}
prettyNum = num.toFixed(4);

// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

var num = 65.454486434534123;

alert(Number(num.toFixed(2)));

console.table(num.toFixed(2), typeof num);

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

var date = new Date().toString();


