// Assignment Code
var generateBtn = document.querySelector("#generate");

//Ask what they would like in their password
function userInput() {
  var pwSize = prompt("How long is your password? Please choose between 8 and 128.", 8);
  if (pwSize > 7 && pwSize < 129) {
    console.log("Your password length is: " + pwSize + "!");
  }

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