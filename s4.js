let name= "jahaj";
function checkPalindrome(str){
return str.split("").reverse().join("")===str;

}

if(checkPalindrome(name))
    console.log("palindrome");
else
console.log("Not a palindrome");

