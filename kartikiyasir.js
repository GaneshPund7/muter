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
// console.log(hcf(10, 15));


// Swap Values without using any variable a=10, b=12.

function swap() {
    let a = 10;
    let b = 12;

    [a, b] = [b, a]
    console.log(`The value of a is ${a} ,The value of b is${b}`);
}
// swap()

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
// console.log(odd(arr));

// 6. WAP to find the given string is Palindrome or not.

let names = "racecar";

function palindrome(str) {
    let reverseString = ""
    for (let i = names.length - 1; i >= 0; i--) {
        reverseString += names[i];
    }
    if (reverseString === str) {
        return true
    }
    return false
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
let a = 1;
let b = 2;
emptyArray.push(a, b);

console.log(emptyArray)

// Find the missing element from array
let arr2 = [1, 3, 5, 2, 6, 8, 9, 22];

function missingelement(arr2) {
    let largest = -Infinity;
    let smallest = Infinity;
    let misingElemet = []
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > largest) {
            largest = arr2[i];
        }
        if (arr2[i] <= smallest) {
            smallest = arr2[i]
        }
    }
    for (let i = smallest; i < largest; i++) {
        if (arr.indexOf(i) < 0) {
            misingElemet.push(i)
        }
    }
    return misingElemet
}
newArray = missingelement(arr)
newArray = newArray.concat(arr);

//  let sortArray = miss.sort();
// sort array without using sort method 
function sortGivenArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
// console.log(sortGivenArr(newArray))

// 17. find the frequency of each and every character in a string and sort it in descending order.
// Input: Engineer
// Output : e3n2g1i1r1
let str = "Engineer";
str = str.toLowerCase();
let obj = {};

for (let i = 0; i < str.length; i++) {

    if (str[i] in obj) {
        obj[str[i]]++
    } else {
        obj[str[i]] = 1;
    }
}
// console.log(obj);
console.log("==================================================");

// Second try
let student = "Vaishnavii";
student = student.toLowerCase();
let studentobj = {}

for (let i = 0; i < student.length; i++) {
    if (!studentobj[student[i]]) {
        studentobj[student[i]] = 1
    }
    else {
        studentobj[student[i]]++
    }
}
console.log(studentobj)


console.log("-------------------------------------")
// Third method
let name2 = "Pooja";
let nameobj = {}
for (let myname of name2) {
    nameobj[myname] = (nameobj[myname] || 0) + 1;
}
console.log(nameobj)

// {name: pooja}
let myNameobj = {};

myNameobj.name = name2
myNameobj.name1 = name2
console.log(myNameobj);


// 19. count lowercase and uppercase
// output = uppercase = 1, lowercase = 9
let input = "Hello world!"
let loandupobj = { lowercase: 0, uppercase: 0 }
for (let input2 of input) {
    if (input2 >= "A" && input2 <= "Z") {
        loandupobj.uppercase++
    } else if (input2 >= "a" && input2 <= "z") {
        loandupobj.lowercase++
    }
}
console.log(loandupobj);

console.log("==========================================")

// 18. Sum of squares of first n prime numbers
// Input = 4, Answer = 87
// Explanation: 2*2+3*3+5x*5+7*7 = 87


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function primeNo(data) {
    let primeArr = []
    for (let i = 2; i < data.length; i++) {
        if (isPrime(i)) {
            primeArr.push(i)
        }
    }
    return primeArr
}
let data = [1, 2, 3, 4, 5, 7, 9, 4, 3];
let primenoArr = primeNo(data)

console.log(primenoArr);

function squaresOfFirstPrimeNo(num) {
    for (let i = 0; i <= num; i++) {
        if (num[i] * num) {
            console.log(num);
        }
    }
}
console.log(squaresOfFirstPrimeNo(primenoArr));

// Find a prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfPrimeSquares(n) {
    let count = 0;
    let num = 2;
    let sum = 0;

    while (count < n){
        if (isPrime(num)){
            sum += num * num;
            count++;
        }
        num++;
    }
    return sum;
}
console.log(sumOfPrimeSquares(4));