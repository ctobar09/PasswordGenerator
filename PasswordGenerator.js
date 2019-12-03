

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789"; 
var sym = "!'#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
var value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var password = ''; 


function randomValue() {
  return value[Math.floor(Math.random() * value.length)];
}