//* Given an array of numbers, use the forEach loop to log each element to the console.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((elem) => {
    console.log(elem);
})



//* Given an array of strings, use the forEach loop to log each string in uppercase.
const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach((elem) => {
    console.log(elem.toUpperCase());
})

//* Given an array of numbers, use the forEach loop to calculate the sum of all elements 
//*  and log the final sum.

const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
numbers2.forEach((elem) => {
    sum += elem;

})
console.log(sum);

//* Given an array of objects, use the forEach loop to log the name property of each object.
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 20 },
];

people.forEach((person) => (
    console.log(person.name)
))

//* Given an array of numbers, use the forEach loop to create a new array that contains 
//* the square of each number.

const numbers3 = [2, 4, 6, 8];
const newArr = [];
numbers3.forEach((num) => (
    newArr.push(num * num)
))

console.log(newArr);


//* Given an array of strings, use the forEach loop to log only the strings that have more than 5 characters.

const words = ["elephant", "cat", "hippopotamus", "dog", "giraffe"];
const newArr2 = []

words.forEach((word) => (
    word.length > 5 ? newArr2.push(word) : ""
))

console.log(newArr2);

//* ou have an array of objects representing products. Use the forEach loop to log the names of the products 
//* that have a price greater than 20.

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Book", price: 15 },
    { name: "Phone", price: 500 },
    { name: "Pen", price: 2 },
];

products.forEach((product) => {
    if (product.price > 20) {
        console.log(product.name);
    }
})

//* Given an array of numbers, use the forEach loop to find and log the largest number in the array.
const numbers4 = [5, 12, 25, 1, 18, 23];
let max = 0;
numbers4.forEach((num) => {
    if (num > max) { 
        max = num; }
})
console.log(max);

//* Given an array of numbers, use the forEach loop to calculate the product of all the numbers 
//* (multiply all the numbers together).

const numbers5 = [2, 3, 4, 5];
let ans = 1;
numbers5.forEach((num)=>{
     ans = ans*num;
})
console.log(ans);

//* Given an array of objects representing students, use the forEach loop to log the names of students 
//* who have scored more than 75 marks.
const students = [
    { name: "Alice", marks: 80 },
    { name: "Bob", marks: 60 },
    { name: "Charlie", marks: 85 },
    { name: "David", marks: 72 }
];

students.forEach((student)=>{
    if(student.marks > 75){
        console.log(student.name);
    }
})

//* You are given an array of numbers. Use the forEach loop to calculate both the sum of the even numbers 
//* and the sum of the odd numbers separately.

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0;
let odd = 0;
numbers6.forEach((number)=>{
    if(number >= 0 && number%2 ==0 ){
        even += number;
    }
    else{
        odd += number;   
    }
})
console.log(even);
console.log(odd);


//* You are given an array of mixed data types (numbers and strings). Use the forEach loop to create a new 
//* array that contains only the strings.

const mixedArray = [1, "apple", 2, "banana", 3, "cherry", 4];
let newArr3 = []
mixedArray.forEach((mixElem)=>{
    if(typeof(mixElem) === 'string')
        newArr3.push(mixElem)
})

console.log(newArr3);

//* Given an array of numbers, use the forEach loop to find the second largest number in the array.

const numbers7 = [12, 35, 1, 10, 34, 1];
let max2 = -Infinity;
let secondmax = -Infinity;

numbers7.forEach((num)=> {
    if (num > max2) {
        secondmax = max2;
        max2 = num;
    } 
    else if(num > secondmax && secondmax < max2){
        secondmax = num;
    }
})

console.log(secondmax);


//* Create a new array containing the names of students who scored above a certain threshold (e.g., 70).
const students2 = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 75 },
    { name: "David", score: 50 }
];

const newArr4 = [];

students2.forEach((student)=>{
    if(student.score  >= 70){
        newArr4.push(student);
    }

})

console.log(newArr4);

//* create an object that contains the count of "even" and "odd" numbers in the array.
const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newObj = {
    even : [],
    odd : [],
}
numbers8.forEach((number)=>{
    if (number%2 == 0) {
        newObj.even.push(number)
    } else {
        newObj.odd.push(number)
    }
})

console.log(newObj);

//* create array containing the names of products that are expensive than a specified threshold (e.g., 20).

const products2 = [
    { name: "Laptop", price: 1000 },
    { name: "Book", price: 15 },
    { name: "Phone", price: 500 },
    { name: "Pen", price: 2 }
];

const newArr5 = [];
products2.forEach((product)=>{
    if(product.price > 20){
        newArr5.push(product.name)
    }
})

console.log(newArr5);

// find and log the names of students who passed (i.e., those who scored 50 or above).

const students3 = [
    { name: "Emma", marks: 45 },
    { name: "Noah", marks: 78 },
    { name: "Olivia", marks: 65 },
    { name: "Liam", marks: 35 }
];

const newArr6 = [];

students3.forEach((student)=>{
   
    if(student.marks >= 50){
        newArr6.push(student.name);
    }
})
console.log("Passed Students: ", newArr6);



//* count how many of these numbers are positive, negative, and zero. Create an object to store these counts.

const numbers9 = [5, -2, 0, 10, -8, 0, 3, -1];
const newObj2 = {
    positive : [],
    negative : [],
    zero : []
}
numbers9.forEach((number)=> {
    if(number > 0){
        newObj2.positive.push(number)
    }
    else if(number < 0){
        newObj2.negative.push(number);
    }
    else{
        newObj2.zero.push(number);
    }
})
console.log(newObj2);


const numbers10 = [5, -2, 0, 10, -8, 0, 3, -1];

const newObj3 = {
    positive: 0,
    negative: 0,
    zero: 0
}

numbers10.forEach((number)=>{
    if (number > 0) {
        newObj3.positive++;
    } else if(number < 0) {
        newObj3.negative++;    
    }
    else{
        newObj3.zero++;
    }
})

console.log(newObj3);

//* You have a list of transactions from an e-commerce website. Each transaction has a user ID and a 
//* total amount. Create an object that stores the total amount spent by each user.

const transactions = [
    { userId: 1, amount: 250 },
    { userId: 2, amount: 120 },
    { userId: 1, amount: 300 },
    { userId: 3, amount: 80 },
    { userId: 2, amount: 60 },
    { userId: 3, amount: 150 }
];

const total = {};

transactions.forEach((transaction) => {
    if(total[transaction.userId]){
        total[transaction.userId] += transaction.amount;
    }  
    else{
        total[transaction.userId] = transaction.amount;
    }
})

console.log(total);

//* You have a list of orders where each order contains a product ID and quantity. 
//* Create an object that stores the total quantity ordered for each product.

const orders = [
    { productId: 1, quantity: 5 },
    { productId: 2, quantity: 3 },
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 4 },
    { productId: 2, quantity: 1 }
];

// Your task: Calculate total quantity per product

const totalQuantity = {};

orders.forEach((order) => {
    if(totalQuantity[order.productId]){
        totalQuantity[order.productId] += order.quantity;
    }
    else{
        totalQuantity[order.productId] = order.quantity;
    }
})

console.log(totalQuantity);

//* You have a list of votes where each vote contains a candidate’s name. Create an object that 
//* stores the total number of votes each candidate received.

const votes = [
    { candidate: "Alice" },
    { candidate: "Bob" },
    { candidate: "Alice" },
    { candidate: "Bob" },
    { candidate: "Alice" },
    { candidate: "Charlie" }
];

// Your task: Count the total votes per candidate
const totalVotes = {};

votes.forEach((vote) => {
    if(totalVotes[vote.candidate]){
        totalVotes[vote.candidate]++;
       
    }
    else {
        totalVotes[vote.candidate] = 1;
    }
})
console.log(totalVotes); 


//* Create an object that stores the total distance traveled by each user.
const distances = [
    { userId: 1, distance: 10 },
    { userId: 2, distance: 15 },
    { userId: 1, distance: 5 },
    { userId: 3, distance: 20 },
    { userId: 2, distance: 8 }
];

// Your task: Calculate total distance per user
const totalDistance = {};

distances.forEach((dis) => {
    if(totalDistance[dis.userId]){
        totalDistance[dis.userId] += dis.distance;
    }

    else {
        totalDistance[dis.userId] = dis.distance;
    }
})

console.log(totalDistance);


//* You have a list of words. Create an object that stores the count of each word in the list.

const words2 = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// Your task: Count the occurrences of each word
const totalWord = {};

words2.forEach((word) => {
    if(totalWord[word]){
        totalWord[word]++;
    }
    else{
        totalWord[word] = 1;
    }
})
console.log(totalWord);

//* Given a string, create an object that stores the count of each character (ignoring spaces).
const sentence3 = "hello world";

const charcters = sentence3.split("");
const countByCharacter = {};

charcters.forEach((char) => {
    if ( char !== " "){
        if(countByCharacter[char]){
            countByCharacter[char]++;
        }
        else{
            countByCharacter[char] = 1;
        }
    
    }
})
console.log(countByCharacter)

const sentence2 = "hello world";

// Expected output: { vowels: 3, consonants: 7 }
const filterData = {vowels: 0, consonants: 0};

//changing string into array
const characters2 = sentence2.split("");
characters2.forEach((word) => {
    if(word !== " "){
        if(word == 'a'|| word == 'e' || word == 'i' || word == 'o' || word == 'u' ){
            filterData.vowels++;
        }
        else {
            filterData.consonants++;
        }
    }
})
console.log(filterData);

//* Write a function that returns the character that appears most frequently in a given string. 
//* If there are multiple characters with the same frequency, return the first one.

//* Expected output: "a"

const sentence4 = "rbracrrrrabrr";
const characters3 = sentence4.split("");
const countingEachCharacter = {};
let occurrences = 0;
let mostFrequentCharacter = " ";

characters3.forEach((char) => {
    if(countingEachCharacter[char]){
        countingEachCharacter[char]++;
    }
    else{
        countingEachCharacter[char] = 1;
    }
    if(countingEachCharacter[char] > occurrences){
        occurrences = countingEachCharacter[char]
        mostFrequentCharacter = char;
    }
})

console.log(occurrences);
console.log(mostFrequentCharacter);


const str1 = "listen";
const str2 = "silent";

// // Expected output: true
// function areAnagrams(str1, str2){
//     if(str1.length !== str2.length){
//         return false
//     }
//     function helperOcuurence(sentence){
//         const occurrencesMap = {};
//         str1.split("").forEach((char) =>{
//             occurrencesMap[char] cha
//         })

//     }

// }