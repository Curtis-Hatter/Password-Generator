//global variables
var pwSize = 8;
var specialValue = false;
var numericValue = false;
var upperCase = false;
var lowerCase = false;
var passWordChoices = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask what user would like in their password
function userInput() {
  pwSize = prompt("How long is your password? Please choose between 8 and 128.", 8);
  //if out of bounds kick user out
  if (pwSize < 8 || pwSize > 128) {
    alert("Your password length is out of bounds! Try again.");
    passWordChoices = '';
    return "";
  }
  lowerCase = confirm("Lower case characters included?");
  upperCase = confirm("Upper case characters included?");
  numericValue = confirm("Numbers included?");
  specialValue = confirm("Special characters included?");
}

//creating the String to choose Password from
function stringLiteral() {
  var charactersToChooseFrom = '';

  if (lowerCase) {
    charactersToChooseFrom += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (upperCase) {
    charactersToChooseFrom += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numericValue) {
    charactersToChooseFrom += '01234567890123456789';
  }
  if (specialValue) {
    charactersToChooseFrom += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  //if no characters were chosen, kick user out.
  if (charactersToChooseFrom === '' && !(pwSize < 8 || pwSize > 128)) {
    alert("Your password is null. Try again.");
    return "";
  }
  return charactersToChooseFrom;
}

function passwordCreation() {
  //create empty string to concat from user choices
  var result = '';
  //concats the random characters generated from "loop to result" giving random password
  for (var i = 0; i < pwSize; i++) {
    result += passWordChoices.charAt(Math.floor(Math.random() * passWordChoices.length));
  }

  // double checking if user has all desired components requested
  return doubleCheck(result);
}

// double checking function 
function doubleCheck(result) {
  if (lowerCase) {
    var checking = /[a-z]/;
    if (result.search(checking) < 0) {
      //use recursion to create desired password
      result = passwordCreation();
    }
  }
  if (upperCase) {
    checking = /[A-Z]/;
    if (result.search(checking) < 0) {
      //use recursion to create desired password
      result = passwordCreation();
    }
  }
  if (numericValue) {
    checking = /[0-9]/;
    if (result.search(checking) < 0) {
      //use recursion to create desired password
      result = passwordCreation();
    }
  }
  if (specialValue) {
    checking = /[!"#$%&()*+,-./:;<=>?@[_`{}~]/;
    if (result.search(checking) < 0) {
      //use recursion to create desired password
      result = passwordCreation();
    }
  }
  return result;
}

// Generate Password
function generatePassword() {
  //call userInput function to store user options
  userInput();
  //error checking: Kick User Out
  if (pwSize < 8 || pwSize > 128) {
    return "";
  }

  //creating string for password creation criteria
  passWordChoices = stringLiteral();

  //pull from passWordChoices to create password
  var password = passwordCreation();

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
