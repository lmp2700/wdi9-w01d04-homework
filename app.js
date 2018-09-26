// 1. Verbal questions
// What is the difference between a parameter and an argument?
//     A parameter is a variable
//     An argument is the data you pass through the parameter
// Within a function, what is the difference between return and console.log?
//     console.log will allow your completed data to show up in the javascript console (in Google Chrome)
//     return will allow the information to be stored and can be accessed later if needed
// What are the implications of the ability of a function to return a value?
//     It allows the function to access the data further on in the code

// 2. Palindrome
// Make sure your function will give the correct answer for words with capital letters.

// const isPalindrome = (string) => {
//     if (string === string.split('').reverse().join('')) {
//         return(string + ' is palindrome.');
//     }
//     else {
//         return(string + ' is not palindrome.');
//     }
// }
// console.log(isPalindrome("Radar"));
// console.log(isPalindrome("Hello"));


// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.

// const sumDigits = (num) => {
//     return num.toString().split('').reduce(function (a, b) {
//         return parseInt(a) + parseInt(b);
//     })
// }
// console.log(sumDigits(421));

// 4. Pythagoras
// const calculateSide = (sideA, sideB) => {
//     return sideC = Math.sqrt(sideA * sideA + sideB * sideB)
// }
// console.log(calculateSide(8, 6))
// console.log(calculateSide(10, 14));

// 5. Sum Array
// const sumArray = (arr) => {
//     let sum = 0; 
//     for(i = 0; i < arr.length; i++){
//     sum += arr[i];
//     }
//     return sum
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6. Prime Numbers
const checkPrime = (num) => {
    const squareRoot = Math.sqrt(num);
    // if(num < 2){ 
    //     return false;
    // }
    // for(var i = 2; i < num; i++) {
    for(i = 2; i < squareRoot; i++) {
        if(num % i === 0){
            return false;
    } else {
        return true;
        }
    }
}
// console.log(checkPrime(97));

// DIFFERENT CODE FOR PART 1 THAT DOES NOT WORK
// const checkPrime = (num) => {
//     let prime = true;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) {
//             prime = false;
//             break;}   
//     }
//     return prime && (num > 1);
// }
//console.log(checkPrime(5));

const printPrimes = (counter) => {
    let notPrime = false;
    for (let counter = 1; counter <= 100; counter++) {
        for (let i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }
}
console.log(printPrimes(97));