function generatePassword(){
    //TODO: your code goes here
        //TODO: prompt user for length
            //TODO: react to invalid answer
        //TODO: prompt user for lowercase
        //TODO: prompt user for uppercase
        //TODO: prompt user for numbers
        //TODO: prompt user for special characters
    //TODO: Make all necessary arrays
        //TODO: loop else if statement with valid array selections for password length
    return "password"
  }
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  