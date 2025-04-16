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
    return hcfs;
}
console.log(hcf(10, 15));


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
    let oddNo = [];
    let evenNo = [];
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



// Find a common element from the array






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
let name4 = "Pooja";
let nameobj = {}
for (let myname of name4) {
    nameobj[myname] = (nameobj[myname] || 0) + 1;
}
console.log(nameobj)

// {name: pooja}
let myNameobj = {};

myNameobj.name = name4
myNameobj.name1 = name4
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

// console.log(primenoArr);

function squaresOfFirstPrimeNo(num) {
    for (let i = 0; i <= num; i++) {
        if (num[i] * num) {
            console.log(num);
        }
    }
}
// console.log(squaresOfFirstPrimeNo(primenoArr));

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

    while (count < n) {
        if (isPrime(num)) {
            sum += num * num;
            count++;
        }
        num++;
    }
    return sum;
}
// console.log(sumOfPrimeSquares(4));


//  [80, 60, 10, 50, 30, 100, 0, 50]
// let key
// for (word of str){
// const key = word.split('').sort().join('');
// console.log(key)
// }

function groupAnagrams(strs) {
    const map = {};

    for (let word of strs) {
        const key = word.split('').sort().join(''); // e.g., 'eat' → 'aet'

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(word);
    }

    console.log(Object.values(map))
    return Object.values(map);
}

const result = groupAnagrams(str);
console.log(result);



// 4. Find the reverse of the string.
let name3 = "madam"

function reverstr(str) {
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

// 5. WAP to find missing elements from the array?
let arr1 = [2, 3, 6, 8, 9, 14];
let missElement = []
let largeNo = Math.max(...arr1);
let smallNo = Math.min(...arr1);

for (let i = smallNo; i <= largeNo; i++) {
    if (arr1.indexOf(i) < 0) {
        missElement.push(i)
    }
}
console.log(missElement)

// 6. WAP to find the given string is Palindrome or not.

function polindrom(pStr) {
    if (reverstr(pStr) === pStr) {
        return true
    } else {
        return false
    }
}
console.log(polindrom(name));

// 11. Find prime numbers from 1 ....n 
let arr3 = [1, 2, 4, 56, 6, 7, 8, 9, 4];

function IsPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false
    }
    return true
}
console.log(IsPrime(6))

// Add sum of first prime no
function aaditionOfFirstPrimeNo(numb) {
    let count = 0
    let num = 2;
    let sum = 0

    while (count < numb) {
        if (IsPrime(num)) {
            sum += num * num;
            count++
        }
        num++
    }
    return sum
}
console.log(aaditionOfFirstPrimeNo(4))


function checkPrimeNo(numb) {

    for (let i = 2; i <= numb / 2; i++) {
        if (numb % i === 0) return false
    }
    return true
}

function addFirstPrimeNo(numb) {
    let count = 0;
    let sum = 0;
    let num = 2;
    while (count < numb) {
        if (checkPrimeNo(num)) {
            sum += num * num
            count++
        }
        num++
    }
    return sum
}
console.log(addFirstPrimeNo(4))


// 13. WAP with 2 different logic, to find all duplicate numbers in an array.

let duplicateArray = [1, 2, 4, 56, 6, 7, 8, 9, 4, 5, 1, 2];
function dupElement(arr) {
    let dupArr = []
    let n = 3

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                dupArr.push(arr[i])
            }
        }
    }
    return dupArr
}
console.log(dupElement(duplicateArray))


// Sort arr without using build in method

let sortArr = [1, 2, 4, 56, 6, 7, 8, 9, 4, 5, 1, 2];
function sortArrFun(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [[arr[i], arr[j]] = [arr[j], arr[i]]]
            }
        }
    }
    return arr
}
console.log(sortArrFun(sortArr))

// 17. find the frequency of each and every character in a string and sort it in descending order.
let name2 = "Enginner"
name2 = name.toLowerCase();

function fName(name) {
    let obj = {}
    for (key of name) {
        if (!obj[key]) {
            obj[key] = 1
        }
        else {
            obj[key]++
        }
    }   
    return obj;
}
console.log(fName(name2))

// 19. count lowercase and uppercase
let name1 = "Hello world!Q"
output = uppercase = 1, lowercase = 9

function checklandup(name1) {
    let lowerCase = 0
    let upperCase = 0;
    for (let i = 0; i < name1.length; i++) {
        if (name1[i] >= "A" && name1[i] <= "Z") {
            upperCase++
        } else if (name1[i] >= "a" && name1[i] <= "z") {
            lowerCase++
        }
    }
    return { lowerCase, upperCase }
}
console.log(checklandup(name));

// Find pairs whose sum = 100;
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

let data1 = [80, 60, 10, 50, 30, 100, 0, 50];
let sum = 0;
for (let i = 0; i < data1.length; i++) {
    for (let j = i + 1; j < data1.length; j++) {
        if (data1[i] + data1[j] === 100) {
            console.log(data1[i], data1[j])
        }
    }
}

console.log(decodeURI("%sdfk"));


// Write a function that counts the number of vowels in a string.
console.log(checkVowels("Ganesaaaaarrrreioooouuuddduu"))
function checkVowels(str) {
    str = str.toLowerCase();
    let obj = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (strs of str) {
        for (volwes of vowels) {
            if (strs === volwes) {
                if (!obj[strs]) {
                    obj[strs] = 1
                } else {
                    obj[strs]++
                }
            }
        }
    }
    return obj
}

// Check If Two Arrays Are Equal

// Compare two arrays (order can matter or not, depending on the version) and return if they are equal.

let number = [1, 3, 4, 6, 7, 9, 0, 6, 4, 3];
let number2 = [1, 3, 4, 6, 7, 9, 0, 6, 4];
let numb = true
for (let i = 0; i < number.length; i++) {
    for (let i = 0; i < number2.length; i++) {

        if (number2[i] !== number[i]) {
            numb = false
        }
    }
}
console.log(numb)


// Find First Non-Repeating Character
// In "aabbcdde", return "c".

let strgs = "aabbcdde";
let NonrepitChar = {}
for (let i = 0; i <= strgs.length; i++) {
    for (let j = i + 1; j < strgs.length; j++) {
        if (strgs[i] !== strgs[j]) {
            if (!NonrepitChar[strgs[i]]) {
                NonrepitChar[strgs[i]] = 1
            } else {
                NonrepitChar[strgs[i]]++
            }

        }
    }
}
console.log(NonrepitChar);

let strg = "aabbbcddce";
let freq = {};

// First pass: count frequency of each character

for (let i = 0; i < strg.length; i++) {
    freq[strg[i]] = freq[strg[i]] ? ++freq[strg[i]] : 1
    console.log(freq[strg[i]])
}
console.log(freq)

for (let j = 0; j < strg.length; j++) {
    if (freq[strg[j]] <= 1) {
        console.log(strg[j])
        break;
    }
}
console.log(undefined || false || null || 0 || "hrllo")


function check(n) {
    return n - 0
}

console.log(check(1));

console.log(1);
{
    let a = 30;
    console.log(a);
    a++
    {
        console.log(a);
        let a = 30;
    }
    a++
}
console.log(a)

setTimeout(function() {
    resolve('Resolved!');
}, 1000);

promise.then(function(value) {
console.log(value)
return value;
}).finally((val)=> {
console.log(val)
})




