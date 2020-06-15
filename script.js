// Assignment of global variables


var generateBtn = document.querySelector("#generate");
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numeric = "0123456789";
var specialCharacters = "!@#^*.";
var passwordLength = "";
var password = "";
var updatePassword = "";


//request user for passwordlength and check for invalid statements
function passwordRequest() {

 passwordLength = parseInt(prompt("How many characters between 8-128 would you like your password to be?"))
    console.log(passwordLength)
    if (passwordLength >=  8 && passwordLength  <= 128 ) { 
        
        console.log(passwordLength)
        selectPassword()
        }
         else {
        alert("Please enter a number between 8 and 128")
         }
        }

//request password criteria 
function selectPassword() {

        console.log(passwordLength)
        if (confirm("Do you want to include a lower case letter?")) {
          updatePassword += lowercase
            };
        if (confirm("Do you want to include a uppercase case letter?")){
          updatePassword += uppercase;
            };
        if (confirm("Do you want to include a number")){
          updatePassword += numeric
             };
        if (confirm("Do you want to include special characters?")) {
        updatePassword += specialCharacters;
            };
    console.log(updatePassword);
    return generatePassword();
    };
//build password according to user requested password length 
function generatePassword() {

    console.log(passwordLength);

        for ( var i = 0; i < passwordLength; i++) {  

           password +=  updatePassword[Math.floor(Math.random() * updatePassword.length)]
            };
        console.log(password);
        return writePassword ();
        };
// Write password to the #password input
function writePassword() {

    console.log("writePassword");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", passwordRequest);
