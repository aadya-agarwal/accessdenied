//INPUT A STRING AND GET ITS REVERSE
let str = "Aadya";let reverse="";
for(let ch = str.length-1 ; ch>=0 ; ch-- )
    {
        reverse += str[ch];
    }
console.log("Reverse string =",reverse);
