var passLength;
var passLower;
var passUpper;
var passNum;
var passSpec;

var lowArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s,t, u, v, w, x, y, z];
var uppArray = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S,T, U, V, W, X, Y, Z];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var speArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

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
        console.log(passLower);
        //prompt user for uppercase
        passUpper = confirm("Would you like your password to include upper case letters?")
        console.log(passUpper);
        //prompt user for numbers
        passNum = confirm("Would you like your password to include numbers?")
        console.log(passNum);
        //prompt user for special characters
        passSpec = confirm("Would you like your password to include special characters?")
        console.log(passSpec); 

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
  