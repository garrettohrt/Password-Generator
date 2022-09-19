// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Arrays for all of the password character choices
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "~"];

  //Empty arrays will be concatenated and joined to make the final password result
  var result = [];
  var userChoice = [];

  //Prompts will let the user choose what characters to include in the password
  var passLength = prompt("Choose a password length between 8 and 128 characters.");

  //If statement validating the password length
  if (passLength < 8 || passLength > 128) {
    alert("Not a valid password length");
    return generatePassword();
  }
  //Prompts continued
  var lowercase = confirm("Do you want lowercase in your password?");
  var uppercase = confirm("Do you want uppercase in your password?");
  var number = confirm("Do you want lowercase in your password?");
  var special = confirm("Do you want special characters in your password?");

  //If statements used to concatenate the user choices in the empty result array
  if (lowercase) {
    result = result.concat(lowercaseSet);

  }

  if (uppercase) {
    result = result.concat(uppercaseSet);

  }

  if (number) {
    result = result.concat(numbSet);

  }

  if (special) {
    result = result.concat(specialSet);
  }
  console.log(result)

  //For loop used to paste the random result array in the empty userChoice array
  for (var i = 0; i < passLength; i++) {

    userChoice.push(result[Math.floor(Math.random() * result.length)]);
  }

  //Join method used to turn the userChoice array into a string
  return userChoice.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
