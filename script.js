// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var result = [];
var userChoice = [];



  var passLength = prompt ("Choose a password length between 8 and 128 characters.");
  var numberConfirm = confirm ("Do you want numbers in your password?");
  var upperCaseConfirm = confirm ("Do you want uppercase in your password?");
  var lowerCaseConfirm = confirm ("Do you want lowercase in your password?");
  var specialConfirm = confirm ("Do you want special characters in your password?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
