//To check if the string is a palindrome
let str = "aadya";
 let i=0;
 for(let c= str.length-1 ; c>=0 ; c-- , i++)
    {
        if(str[c]!==str[i])
            {
                console.log('It is not a Palindrome');
                return;
            }
        
        
    }
console.log("it is a palindrome");
