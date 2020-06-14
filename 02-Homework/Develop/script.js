// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password length request to client
prompt("How many characters between 8-128 would you like your password to be?")
    if()
  if (confirm("Do you want to include a lower case letter?")) {


  }

  confirm("Do you want to include upper case letters?")
  confirm("Do you want to include numbers?")
  confirm("Do you want to include special characters")
  var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
