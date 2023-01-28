// Assignment Code
var generateBtn = document.querySelector("#generate");
//these are the array for each character type
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!','@','#','$','%','&','*','(',')','-','_','+','=']
var lowerCaseletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword () {
//user needs to meet criteria in order to move forward, if not they will be rejected and need to restart
  var userChoice = prompt("please select password length between 8 and 128 characters");
 
 if  (userChoice < 8 || userChoice > 128){
  alert("Password doesn't meet criteria")
 }
//User needs to confirm what they want to add to password criteria
  else {
    var hasupperCase = confirm("Would you like to use Upper case letters?")
    var haslowerCase = confirm("Would you like to use Lower case letters?")
    var hasspecial = confirm("Would you like to use special characters?")
  var hasnumeric = confirm("Do you want to use numeric characters?")
//if user does not select any of the criteria then they will be reminded to select one
  if (!upperCaseletters && !lowerCaseletters && !numericCharacters && !specialCharacters){
    alert("Please select at least one")
    generatePassword();
    // return "Password doesn't meet criteria";

  }
  //we need to have empty arrays inside functions in case user is repeating use
  else { 
    var possibleChars =[];
    var result= [];
// this is in case user chooses their preference for the password to then be generated
    if(hasnumeric){
      possibleChars = possibleChars.concat(numericCharacters);
    }
  
  if(hasspecial){
    possibleChars = possibleChars.concat(specialCharacters);
  }
  if(haslowerCase){
    possibleChars = possibleChars.concat(lowerCaseletters);
  }
  if(hasupperCase){
    possibleChars = possibleChars.concat(upperCaseletters);
  }

for(var i = 0; i < userChoice; i++){
  var randomNumber = Math.floor(Math.random() * possibleChars.length);
  result [i] = possibleChars[randomNumber]
}
  }
var finalpass = result.join("");
return finalpass;

}
 return ("my password");
}

// Write password to the #password input
function writePassword() {
  //alert("working");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Sam Adams TA pseudocode
//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

