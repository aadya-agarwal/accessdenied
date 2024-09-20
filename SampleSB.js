// const arr = [1,2,3,4]

//0,1,2,3

// console.log(arr.length);

// arr.push(5);
// console.log(arr);//push - adds to the end of the array
// arr.unshift(0);// adds to the start of the array
// console.log(arr);
// console.log(arr.shift());// returns the first element of the array
// console.log(arr);
// console.log(arr.pop()); // returns the last element of the array


// //map
// //output - [2,4,6,8];

// const ans = arr.map((element) => element * 2)
// console.log("multiplied by 2",ans);



// const fruits = ["Apple", "Banana", "Cherry"];
// const iterator = fruits.values();
// console.log(iterator)
// for (const value of iterator) {
//   console.log(value);
// }

// // Original Array
// let courses = ["HTML", "CSS", "JavaScript", "React"];

// // Joining the array elements
// const a="aadya"

// console.log(a.split('').reverse().join('+'));


const arrayOfObjects = [
    {
        "name": "Supragya Anand",
        "age": 22
    },
    {
        "name":"Aadya Agarwall",
        "age": 18
    },
    {
        "name": "abbaaa",
        "age": 22
    },
    {
        "name": "jabba",
        "age": 18
    },
    {
        "name":"dabba",
        "age": 28
    },
     {
        "name":"sonu",
        "age": 28
    }
]

const ans = arrayOfObjects.reduce((acc, item) => {
    
    if(!acc[item.age]){
        acc[item.age] = [];
    }
    
    acc[item.age].push(item);
    return acc;

},{})

console.log(ans);

