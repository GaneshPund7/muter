// console.log(1);

// setTimeout(() => {
//     console.log(2);  
// }, 0);

// setImmediate(()=>{
//     console.log(3); 
// })


// higest common factor 
function hcf(a, b) {

    let hcfs = 1;
    let i = 1;
    while (i <= a && i <= b) {
        if (i % a == 0 && i % b == 0) {
            console.log(i);
            hcfs = i
        }
        i++;
    }
    return hcfs
}
console.log(hcf(10, 15));


// Swap Values without using any variable a=10, b=12.

function swap() {
    let a = 10;
    let b = 12;

    [a, b] = [b, a]
    console.log(`The value of a is ${a} ,The value of b is${b}`);
}
swap()

//  Find odd and even no
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function odd(a) {
    let oddNo = []
    let evenNo = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            oddNo.push(a[i]);
        }
        else {
            evenNo.push(a[i]);
        }
    }
    return { oddNo, evenNo }
}
console.log(odd(arr));

// 6. WAP to find the given string is Palindrome or not.

let names = "racecar";

 function palindrome(str){
     let reverseString = ""
     for (let i= names.length - 1; i>=0; i--){
    reverseString += names[i];
}
if(reverseString === str){
    return true
}
return  false
 }
 console.log(palindrome(names));



//  WAP to find the given string is next Palindrome.
function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function nextPalindrome(num) {
    num = parseInt(num); 
    while (true) {
        num++; 
        if (isPalindrome(num)) {
            return num;
        }
    }
}

// Example Usage
let name = "raja";
let nextPal = nextPalindrome(name);
console.log("Next palindrome:", nextPal);


// Not understood part
let cache = {};

function fibonacciMemo(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (cache[n]) return cache[n]; 

    cache[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    return cache[n];
}

// Print first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
    console.log(fibonacciMemo(i));
}


// Create empty array and push element into it;
let emptyArray = [];
let a= 1;
let b = 2;
emptyArray.push(a,b);

console.log(emptyArray)





// Find the missing element from array
 let arr2 = [1,3,5,2,6,8,9,22];
 
function missingelement(arr2){
    let largest = -Infinity;
    let smallest = Infinity;
    let misingElemet = []
    for(let i=0; i<arr2.length; i++){
        if(arr2[i]> largest){
            largest = arr2[i];
        }
        if(arr2[i]<= smallest){
            smallest = arr2[i]
        }
    }
for(let i = smallest; i<largest; i++){
    if(arr.indexOf(i) < 0){
        misingElemet.push(i)
    }
}
return misingElemet 
}
 newArray = missingelement(arr)
 newArray = newArray.concat(arr);
 
//  let sortArray = miss.sort();
// sort array without using sort method 
function sortGivenArr(arr){
       for(let i = 0; i< arr.length -1; i++){
         for(let j = i + 1; j< arr.length; j++){
             if(arr[i] > arr[j]){
                 let temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
         }
     }
     return arr
}
console.log(sortGivenArr(newArray))
