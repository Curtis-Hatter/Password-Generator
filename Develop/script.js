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
  if (pwSize < 7 || pwSize > 129) {
    console.log("Your password length is out of bounds! Try again.");
    return;
  }
  lowerCase = confirm("Lower case characters included?");
  upperCase = confirm("Upper case characters included?");
  numericValue = confirm("Numbers included?");
  specialValue = confirm("Special characters included?");

  /* checking for if works */
  // console.log(pwSize + " " + specialValue + " " + numericValue + " " + upperCase + " " + lowerCase)
}

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

  return charactersToChooseFrom;
}

// Generate Password
function generatePassword() {

  //call userInput function to store values
  userInput();

  //creating string for password creation
  var passWordChoices = stringLiteral('');

  /* checking for if works */
  console.log(passWordChoices);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);