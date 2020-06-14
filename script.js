// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numeric = "0123456789";
var specialCharacters = "!@#^*.";
var updatePassword = ""


//Password length request prompt && password generator function 
function generatePassword() {
console.log("hello")
var passwordLength = parseInt(prompt("How many characters between 8-128 would you like your password to be?"))
 

for ( var i = 0; i < passwordLength; i++) {
  if( passwordLength > 8 || passwordLength < 128  ) {
    console.log(passwordLength)
        if (confirm("Do you want to include a lower case letter?")) {
          updatePassword += lowercase[Math.floor(Math.random * lowercase.length)]
          console.log(lowercase)
            };
        if (confirm("Do you want to include a uppercase case letter?")){
          updatePassword += uppercase[Math.floor(Math.random * uppercase.length)]
          console.log(updatePassword);
            };
        if (confirm("Do you want to include a number")){
          updatePassword += numeric[Math.floor(Math.random * numeric.length)]
          console.log(updatePassword);
             };
        if (confirm("Do you want to include special characters?")) {
          updatePassword += specialCharacters[Math.floor(Math.random * specialCharacters.length)]
          console.log(updatePassword);
            };
        };
    };
};
  var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
