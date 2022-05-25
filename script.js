// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

// all characters that can be randomly selected for password based on users selection of parameters
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

// variable list
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumeric;
var confirmSpecial;

// function to generate new password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } if (confirmLength === isNaN) {
    window.alert("The input you have entered is not a valid number. Please try again.");
    return generatePassword();
  }

  // Repeat back how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);


  //determine parameters of password
  var confirmUpperCase = window.confirm("Click 'OK' if you would like upper case letters.");
  var confirmLowerCase = window.confirm("Click 'OK' if you would like lower case letters.");
  var confirmNumeric = window.confirm("Click 'OK' if you would like numerical characters.");
  var confirmSpecial = window.confirm("Click 'OK' if you would like special characters.");

  // loop parameters if none selected
  while (confirmUpperCase === false && confirmLowerCase === false && confirmNumeric === false && confirmSpecial === false) {
    window.alert("You must choose at least 1 password parameter");
    var confirmUpperCase = window.confirm("Click 'OK' if you would like upper case letters.");
    var confirmLowerCase = window.confirm("Click 'OK' if you would like lower case letters.");
    var confirmNumeric = window.confirm("Click 'OK' if you would like numbers.");
    var confirmSpecial = window.confirm("Click 'ok' if you would like special characters.");
  }


  var passwordCharacters = [];

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  };

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  };

  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(number)
  };

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  };


  console.log(passwordCharacters);

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
