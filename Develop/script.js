// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask what they would like in their password
function userInput() {
  var pwSize = prompt("How long is your password? Please choose between 8 and 128.", 8);
  if (pwSize < 7 || pwSize > 129) {
    console.log("Your password length is out of bounds! Try again.");
    return;
  }
  var lowerCase = confirm("Lower case characters included?");
  var upperCase = confirm("Upper case characters included?");
  var numericValue = confirm("Numbers included?");
  var specialValue = confirm("Special characters included?");
}

// Generate Password
function generatePassword() {
  userInput();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);