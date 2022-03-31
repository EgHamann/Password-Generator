var passLength;
var passLower;
var passUpper;
var passNum;
var passSpec;
var i = 0;

var finalPass = ""

var lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var lowUpp = lowArray.concat(uppArray);
var lowNum = lowArray.concat(numArray);
var lowSpe = lowArray.concat(speArray);

var uppNum = uppArray.concat(numArray);
var uppSpe = uppArray.concat(speArray);

var numSpe = numArray.concat(speArray);

var lowUppNum = lowUpp.concat(numArray);
var lowUppSpe = lowUpp.concat(speArray);

var lowNumSpe = lowNum.concat(speArray);

var uppNumSpe = uppNum.concat(speArray);

var allChar = lowUpp.concat(numSpe);

function generatePassword(){
    //TODO: your code goes here
    //Gather user data
        //prompt user for length
        passLength = prompt("Please choose a length for your password, between 8 and 128 characters.");
            //react to invalid answer
            while (passLength < 8 || passLength > 128) {
                passLength = prompt("That password length is not usable. Please choose a length for your password, between 8 and 128 characters.");
            } 
        console.log(passLength);
        //prompt user for lowercase
        passLower = confirm("Would you like your password to include lower case letters?")
        //prompt user for uppercase
        passUpper = confirm("Would you like your password to include upper case letters?")
        //prompt user for numbers
        passNum = confirm("Would you like your password to include numbers?")
        //prompt user for special characters
        passSpec = confirm("Would you like your password to include special characters?") 
//TODO: loop else if statement with valid array selections for password length  
            while (passLower == false && passUpper == false && passNum == false && passSpec == false) {
                alert("A password must have at least one category of characters. Please try again.")
        //prompt user for lowercase
        passLower = confirm("Would you like your password to include lower case letters?")
        //prompt user for uppercase
        passUpper = confirm("Would you like your password to include upper case letters?")
        //prompt user for numbers
        passNum = confirm("Would you like your password to include numbers?")
        //prompt user for special characters
        passSpec = confirm("Would you like your password to include special characters?") 
            }
            console.log(passLower);
            console.log(passUpper);
            console.log(passNum);
            console.log(passSpec);

            if (passLower == true && passUpper == false && passNum == false && passSpec == false) { 
                do {            
                    finalPass = finalPass + (lowArray[Math.floor(Math.random() * lowArray.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == false && passUpper == true && passNum == false && passSpec == false) {
                do {            
                    finalPass = finalPass + (uppArray[Math.floor(Math.random() * uppArray.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == false && passUpper == false && passNum == true && passSpec == false) {
                do {            
                    finalPass = finalPass + (numArray[Math.floor(Math.random() * numArray.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == false && passUpper == false && passNum == false && passSpec == true) {
                do {            
                    finalPass = finalPass + (speArray[Math.floor(Math.random() * speArray.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == true && passUpper == true && passNum == false && passSpec == false) {
                do {            
                    finalPass = finalPass + (lowUpp[Math.floor(Math.random() * lowUpp.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == true && passUpper == false && passNum == true && passSpec == false) {
                do {
                    finalPass = finalPass + (lowNum[Math.floor(Math.random() * lowNum.length)])
                    i++
                } while (i < passLength)
            } else if (passLower == true && passUpper == false && passNum == false && passSpec == true) {
                do {
                    finalPass = finalPass + (lowSpe[Math.floor(Math.random() * lowSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == false && passUpper == true && passNum == true && passSpec == false) {
                do {
                    finalPass = finalPass + (uppNum[Math.floor(Math.random() * uppNum.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == false && passUpper == true && passNum == false && passSpec == true) {
                do {
                    finalPass = finalPass + (uppSpe[Math.floor(Math.random() * uppSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == false && passUpper == false && passNum == true && passSpec == true) {
                do {
                    finalPass = finalPass + (numSpe[Math.floor(Math.random() * numSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == true && passUpper == true && passNum == true && passSpec == false) {
                do {
                    finalPass = finalPass + (lowUppNum[Math.floor(Math.random() * lowUppNum.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == true && passUpper == true && passNum == false && passSpec == true) {
                do {
                    finalPass = finalPass + (lowUppSpe[Math.floor(Math.random() * lowUppSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == true && passUpper == false && passNum == true && passSpec == true) {
                do {
                    finalPass = finalPass + (lowNumSpe[Math.floor(Math.random() * lowNumSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == false && passUpper == true && passNum == true && passSpec == true) {
                do {
                    finalPass = finalPass + (uppNumSpe[Math.floor(Math.random() * uppNumSpe.length)])
                        i++
                    } while (i < passLength)
            } else if (passLower == true && passUpper == true && passNum == true && passSpec == true) {
                do {
                    finalPass = finalPass + (allChar[Math.floor(Math.random() * allChar.length)])
                        i++
                    } while (i < passLength)
            }
    return finalPass
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
  