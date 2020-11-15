//global variables
var pwSize = 8;
var specialValue = false;
var numericValue = false;
var upperCase = false;
var lowerCase = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask what user would like in their password
function userInput() {
  pwSize = prompt("How long is your password? Please choose between 8 and 128.", 8);
  //if out of bounds kick user out
  if (pwSize < 8 || pwSize > 128) {
    alert("Your password length is out of bounds! Try again.");
    return;
  }
  lowerCase = confirm("Lower case characters included?");
  upperCase = confirm("Upper case characters included?");
  numericValue = confirm("Numbers included?");
  specialValue = confirm("Special characters included?");
}

//creating the String to choose Password from
function stringLiteral(charactersToChooseFrom) {

  if (lowerCase) {
    charactersToChooseFrom += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (upperCase) {
    charactersToChooseFrom += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numericValue) {
    charactersToChooseFrom += '0123456789';
  }
  if (specialValue) {
    charactersToChooseFrom += ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  //if no characters were chosen, kick user out.
  if (charactersToChooseFrom === '' && !(pwSize < 8 || pwSize > 128)) {
    alert("Your password is null. Try again.")
    return
  }
  return charactersToChooseFrom;
}

// Generate Password
function generatePassword() {
  //create empty character/string for later
  var result = '';

  //call userInput function to store user options
  userInput();

  //creating string for password creation criteria
  var passWordChoices = stringLiteral('');

  //pull from passWordChoices to create password
  for (var i = 0; i < pwSize; i++) {
    result += passWordChoices.charAt(Math.floor(Math.random() * passWordChoices.length));
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);