// generate password

function generate(){

 var length = document.getElementById("slider").value;

//possible password values

 var values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!#$%^&*?/()+_-{}";


  var password ='';

  /// creating for loop for password characters

  for(var i = 1; i <= length; i++) {
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

    
////creating checkbox functions responsive to user input


