// generate password


function generate(){

 var length = document.getElementById("slider").value;
 var numBox = document.getElementById("numbersBox").checked;
 var specBox = document.getElementById("specChar").checked;
 var lowerBox = document.getElementById("lowerBox").checked;
 var upperBox = document.getElementById("upperBox").checked;



//possible password values

var values = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "~!#$%^&*?/()+_-{}";

// if uppercaseBox is checked, values = values + uppercase

////creating checkbox functions responsive to user input

if (numBox === true) {
    values = values + numbers;
   
}

if (specBox === true) {
    values = values + special;
    
}

if (lowerBox === true) {
    values = values + lowercase;
}

if (upperBox === true) {
    values = values + uppercase;
}

// and so on for others

  var password ='';

  /// creating for loop for password characters

  for(var i = 0; i < length; i++) {
      password = password + values.charAt(Math.floor(Math.random() * (values.length - 1)));
  }
    /// add password to input box

    document.getElementById("display").value = password;

}

/// setting length display

document.getElementById("length").innerHTML = "Length: 68";

//function to display slider position

document.getElementById("slider").oninput = function (){
    if (document.getElementById("slider").value > 7){
        document.getElementById("length").innerHTML = "Length: " + 
        document.getElementById("slider").value;
  }

}

//copy to clipboard function 

function copyToClipBoard(){

    document.getElementById("display").select();

    document.execCommand("copy");
    } 



