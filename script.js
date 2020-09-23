///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
//https://www.net-comber.com/charset.html
// Step 1: Create functions for uppercase, lowercase, numbers and symbols.
const randomFunc = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
generateBtn.addEventListener("click", () => {
  const length = lengthEl.value,
  const hasLowercase = lowercaseEl.checked,
  const hasUppercase = uppercaseEl.checked,
  const hasNumber = numbersEl.checked,
  const hasSymbol = symbolsEl.checked,
  });
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 97);
}
function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = " !#$%&'()*+,-./:;<=>?@[^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//Password Elements
const uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseEl = "abcdefghijklmnopqrstuvwxyz";
const numbersEl = "0123456789";
const symbolsEl = "!@#$%^&*()+={}[]";
const generateBtn = document.querySelector("#generate");
// copy password to the clipboard
ClipboardEl.addEventListener("click", () => {
 const textarea = document.createElement("textarea");
 const password = resultEl.innerText;
 if(!password) {
   return;
 }
 textarea.value = password;
 document.body.appendChild(textarea);
 textarea.select();
 document.execCommand("copy");
 textarea.remove();
 alert("Password copied to clipboard!");
 })
function generatePassword(lowercase, uppercase, number, symbol, length){
  }
let generatePassword = '';
const typesCount = lowercase + uppercase + number + symbol;
//console.log("typesCount: ", typesCount);
const typesArr = [{lowercase}, {uppercase}, {number}, {symbol}]
//console.log("typesArr: ", typesArr);
if(typesCount == 0) {
  return "";
}
for(let i = 0; i< length; i += typesCount) {
  typesArr.forEach(type => {
const funcName = Object.Keys(type) [0];
//console.log("funcName", funcName);
generatePassword += randomFunc[funcName]();
  });
}
//console.log(generatePassword); 
