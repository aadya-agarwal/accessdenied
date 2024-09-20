//to count no of vowels in a string
let str = "Software Engineer"; let count = 0;
let S = str.toUpperCase();
console.log(S);
for(let a=str.length-1 ; a>=0 ; a--)
    {
        if(str[a]==='A'|| str[a]==='E'|| str[a]==='I'|| str[a]==='O'|| str[a]==='U')
            {
            count++;
            }
    }
console.log("No of vowels in string ",str," =",count);
