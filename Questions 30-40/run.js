// var x = "waleed";
// x = x.toUpperCase();

// console.log(x);

// var y = "ahmed";
// y = y.toUpperCase();
// console.log(y);

// var myName = "Waleed Ahmed";
// var finalName = myName.toLowerCase();
// console.log(finalName);

// var arr = ["WALEED", "AHMED"];

// var myName = arr[0].toLowerCase();
// console.log(myName);

// var myName = "waleed ahmed";
// alert(myName.toUpperCase());

// var cityName = prompt("Enter Name");

// var cityName1 = cityName.slice(0, 1).toUpperCase();

// var cityName = cityName.slice(1).toLowerCase();
// var cityName = cityName1 + cityName;

// console.log(cityName);

// var sameWords = "captian";

// sameWords = sameWords.slice(1, 3);
// console.log(sameWords);

// var sameWords = "captian";

// var finalWord = sameWords.slice(1, 3);

// console.log(finalWord);

// var animal = "elephant";

// var seg = animal.slice(2, 6);

// console.log(seg);

// var para = "this is me waleed ahmed";

// var myName = para.indexOf("waleed ahmed");
// console.log(myName);

// for (i = 0; i <= myName; i++) {
//   if (myName.slice(i,11 +  ) === "waleed ahmed") {
//     myName = "anus rahman";
//   }
// }

// var para = "my name is waleed ahmed";

// var final = para.replace("waleed ahmed", "anus rahman");
// console.log(final);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

// var str = "waleed ahmed";

// var firstStr = str.slice(0, 1);
// var lastStr = str.slice(9, 12);

// var final = firstStr + lastStr;

// document.write(final);

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// var txt = "we are going to a park. Ali wanna go with us";
// var indx = txt.lastIndexOf("go");

// var txt = "abcde";

// console.log(txt.charAt(2));

// var myName = "waleed";

// console.log(myName.length);

// var str =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum reprehenderit neque?";

// console.log(str.indexOf("neque"));

// var x = str.slice(86,91);

// console.log(x)

// var input = "Lorem, ipsum dolor sit amet.";

// console.log(input.indexOf("amet"));

// var cha = input.slice(23, 27);

// console.log(cha);

// var input = "Lorem, ipsum dolor sit amet.";
// console.log(input.indexOf("dolor"));
// for (var i = 0; i < input.length; i++) {
//   if (input.slice(13, 13 + 5) === "dolor") {
//     alert("It's Dolor");
//     break;
//   }
// }

// var input = "Lorem";
// var arr = [];
// var value;
// for (let i = 0; i < input.length; i++) {
//   value = input.slice(i, i + 1);
//   console.log(value);
//   arr[i] = value;
// }
// console.log(arr);

// var reply = "My answer to your proposal is NO!";
// var revisedReply = reply.replace("NO!", "YES!");

// console.log(revisedReply);

// var str = "there is only 1 member. who is good with JS";

// var newStr = str.replace("1", "one");

// console.log(newStr);

// var y = x.replace(/a/g, "z"); // 3 characters are {/(string)/g}

// 1. Form a statement that rounds a number to the nearest integer.

// var num = 23.54454;

// var num = Math.round(num);

// // console.log(num);

// var origNum = 55156.489948115;

// var roundNum = Math.round(origNum);

// console.log(roundNum);

// var num1 = 0.5;

// var num2 = Math.floor(num1);

// console.log(num2);

// var randomNum = Math.random() * 50;

// console.log(randomNum);

// var diceNum = Math.random() * 6;

// diceNum = Math.floor(diceNum) + 1;

// console.log(diceNum);

// var tossNum = Math.random() * 2;
// var finalNum = Math.floor(tossNum);

// if (finalNum === 0) {
//   alert("Heads Win");
// } else {
//   alert("Tails Win");
// }

// var num = "123";

// num = parseInt(num);

// console.log(num);

// var num = "11.253698";

// var floatNum = parseFloat(num);

// console.log(floatNum);

// var num = "11.253698";

// var type = typeof num;

// console.log(type);

// var floatNum = parseFloat(num);

// console.log(typeof floatNum);

// var num = 256;

// var stringNum = num.toString();

// console.log(stringNum);

// var myNum = 42;

// var finalNum = myNum.toString();

// console.log(finalNum, typeof finalNum);

// var stringNum = "3.14";

// var finalNum = parseFloat(stringNum);

// console.table(stringNum, typeof finalNum, stringNum, typeof stringNum);

// var num1 = 1.22568844542;

// num1 = num1.toFixed(4);

// var num = 25.23356454;

// num = Number(num.toFixed(2));

// console.log(num);

// var num = 54545.548484;

// var str = num.toString();
// if (str.charAt(str.length - 1) === "2") {
//   str = str.slice(0, str.length - 1) + "3";
// }
// num = Number(str);
// prettyNum = num.toFixed(4);

// console.log(prettyNum, num);

// var num = 65.454486434534123;

// alert(Number(num.toFixed(2)), typeof num);

// console.table(num.toFixed(2), typeof num);

// var dObj = new Date();

// console.log(dObj.getMilliseconds());

// **************************** Age Calculator ***************************************

// var age = prompt("Enter Age");

// var myAge = new Date(age);

// var myAge = myAge.getTime();

// var today = new Date();

// var difference = today - myAge;

// var accurate = Math.floor(difference / (1000 * 60 * 60 * 24));

// document.write(accurate);

// var date = new Date();

// var dStr = date.toString();

// var d = new Date().toString();

// var day = d.slice(0, 4);

// console.log(day);

// var d = new Date().getDay();

// var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];

// var currentDay = dayNames[d];
// console.log(currentDay);

// var date = new Date().toString();

// var date = new Date()

// console.log(date);

// var date = new Date("Dec 31, 2020");
// console.log(date);

// var date = new Date("feb 2, 1992");

// console.log(date);

// var date = new Date();

// var changeYear = date.setFullYear(2005);

// var date = new Date();
// var changeDay = date.setDate(5);

// var userAgeInput = prompt("Enter Your Age", "Jan 1, 1970");

// var userAge = new Date(userAgeInput);
// var userAgeMili = userAge.getTime();

// var today = new Date();
// var todayMili = today.getTime();

// var diff = todayMili - userAgeMili;

// var accurateAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

// console.log(accurateAge);

// function askName() {
//   var userName = prompt("Enter Name");
//   alert(userName);
// }
// askName();

// function named(alphabet, string, number) {
//   var finalAns = alphabet + string + number;
//   console.log(finalAns);
// }
// named("abc", "waleed", 123);

// function threeParameters(first, second, third) {
//   var result = first * second * third;
// }

// function arrayFun(name, add, final, proof) {
//   var arr = [name, add, final, proof];
//   console.log(arr);
// }
// arrayFun("name", "add", 0, true);

// function numberSum (firstNum, secondNum){
//     var result = firstNum + secondNum;
//     console.log(result);
//   }
//   numberSum(25,96);

// function average() {
//   var a = 10;
//   var b = 26;
//   var c = (a * b) / 100;
//   return c;
// }
// var ans = average();

// console.log(ans);

// function valueReturn() {
//   var a = 23;
//   var b = 68;
//   var c = a + b;
//   return c;
// }
// var f = valueReturn();
// console.log(f);

// var word = prompt("Enter Word");

// function counter() {
//   word = word.length;

//   console.log(word);
// }

// counter();

// var changeYear = +prompt("Enter Your Year");

// function year() {
//   var date = new Date();
//   var d = date.setFullYear(changeYear);

//   console.log(d);
// }

// year();
// console.log();
// function ageCalcu() {
//   var userYear = prompt("Enter Your Date of Birth", "feb 28, 2006");
//   var userAge = new Date(userYear);
//   var userAgeMili = userAge.getTime();

//   var today = new Date();
//   var todayMili = today.getTime();

//   var diff = todayMili - userAgeMili;

//   var accurateAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

//   console.log(accurateAge);
// }
// ageCalcu();

// var array = [
//   "zaid",
//   "haris",
//   "raza",
//   "abubakar",
//   "hassan",
//   "hussain",
//   "fatima",
// ];
// var found = false;

// function findVal() {
//   var userName = prompt("Enter Your Name to check list.");
//   for (var i = 0; i < array.length; i++) {
//     var finalName = userName.toLowerCase();
//     if (array[i] === finalName) {
//       found = true;
//       alert("User Name Found!");
//       break;
//     }
//   }
//   if (!found) {
//     alert("User Name Not Found");
//   }
// }
// findVal();

// function wordCount() {
//   var string = prompt("Enter String to check Number.");
//   return string.repeat(10);
// }

// var array = ["a", "b", "c", "d", "e"];

// function reverse() {
//   return array.reverse();
// }
// var x = reverse();
// console.log(x);

// function usage() {
//   var a = 10; // This veriable is brasis {} Scoped AKA local scope
// }
// console.log(a); // we can't access that veriable here.

// var a = 24; // Now this is a global veriable means we can use it anywhere in our code.

// function add(b) {
//   console.log(a + b);
// }
// add(25);

// var myName = "ahmed";

// switch (myName) {
//   case "Waleed":
//     alert("User Name is Waleed");
//     break;
//   case "ahmed":
//     console.log("Welcome Ahmed");
//     break;
//   default:
//     alert("Not a User");
//     break;
// }

// var cityName = prompt("enter your city name");

// switch (cityName) {
//   case "karachi":
//     alert("The city of lights");
//     break;
//   case "lahore":
//     alert("Beautiful city");
//     break;
//   case "islamabad":
//     alert("Capital of Pakistan");
//     break;
//   default:
//     alert("City not found!");
// }

// function changeMonth(month) {
//   var date = new Date();
//   var change = date.setMonth(month);
// }
// changeMonth(8);

// var date = new Date();
// console.log(date);

// var mydate = new Date("2005");
// console.log(mydate);

// function changeMonth(month) {
//   var date = new Date(month);
//   console.log(date);
// }
// changeMonth("2008");

// var mins = prompt("Enter Mins");

// function addMins() {
//   var date = new Date();
//   date.setMinutes(mins);
//   console.log(date);
// }
// addMins();

// var hours = prompt("Enter No of Hours you wanna Add");

// function setHours() {
//   var date = new Date();
//   date.setHours(hours);
//   console.log(date);
// }
// setHours();

var arr = [1, 2, 3, 4, 5, 6];

function addArr() {
  arr.splice();
  console.log(arr);
}
addArr();
