//1.Use map to create an array of squares of the given array of numbers.
// let arr= [2,3,4,5,6,7,8,9];
// let req = arr.map(element=> element*element);
// console.log (req);

//2.Given an array of strings, use map to create an array of their lengths
// let str = ["Apple", "Mango", "Orange"];
// let len = str.map(element=> element.length);
// console.log(len);

//3.Use map to add 5 to each element in an array.
// let ar = [3,6,7,8,9,0]
// let req = ar.map(element=> element + 5);
// console.log(req);


//4.Create a function that uses map to capitalize the first letter of each word in an array of strings.//GOODQUE
// let str= ["aadya","jahnavi","gayatri"];
// let str2= str.map(element=> element[0].toUpperCase()+ element.slice(1));
// console.log(str2);


//5.Use map to multiply each number in an array by its index.//NEW 
// let num = [3,5,6,7,8,9];
// let num2 = num.map((ele,index)=> ele*index);
// console.log(num2);


//6.Use map to convert an array of strings into an array of boolean values representing whether each string contains the letter "a".
//INCLUDES FN NAI PATA...USKE BINA?
// let str = ["chocolate", "fruits", "veges",];
// let flag= False;
// let str2 = str.map(s=> for(let i=0; i<s.length; i++)
// if (s(i)=="a")
// {
//     flag =true;
//     break;
// }
// )
// console.log(str2);
// CHAT GPT1.
// const strings = ["apple", "banana", "cherry", "date"];
// const containsA = strings.map(str => str.includes('a'));

// console.log(containsA);
//CHAT GPT2.
// const strings = ["apple", "banana", "cherry", "date"];
// const containsA = strings.map(str => str.indexOf('a') !== -1);

// console.log(containsA);



//Use map to create a new array of objects with properties name and age from an array of arrays.
