
function findPrimes() {
    const primes = [];
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    console.log('Prime numbers between 1 and 100:', primes);
}
findPrimes();

function reverseString(input) {
    let reversed = '';
    let i = input.length - 1;
    do {
        reversed += input[i];
        i--;
    } while (i >= 0);
    console.log(`Original string: "${input}" | Reversed string: "${reversed}"`);
}
reverseString("hello world");


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

people.push({ name: 'Charlie', age: 35 });
console.log('Array after adding a person:', people);

const removedPerson = people.pop();
console.log('Removed person:', removedPerson);
console.log('Array after removing the last person:', people);

let strings = ['apple', 'banana', 'cherry'];


const removedString = strings.shift();
console.log('Removed string:', removedString);
console.log('Array after shift():', strings);

strings.unshift('orange');
console.log('Array after unshift():', strings);
