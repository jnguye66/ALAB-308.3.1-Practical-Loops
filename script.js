// Part 1: Fizz Buzz

for (i = 1; i <= 100; i++) { // All numbers between 1 and 100
    if (i % 3 === 0 && i % 5 === 0){ // If i divisible by both 3 and 5
        console.log(`${i} - Fizz Buzz`);
    } else if (i % 3 === 0) { // If i divisible by 3
        console.log(`${i} - Fizz`); 
    } else if (i % 5 === 0){ // If i divisible by 5
        console.log(`${i} - Buzz`);
    } else {
        console.log(`${i}`); 
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
// Part 2: Prime Time

let n = 11; // Starting number
let m = n; // Upper Limit

while(m <= n) {
    let high = 100;
    for (let i = n; i <= high; i++){
        let flag = 0; // Keeps track of prime
    
        for (let j = 2; j < i; j++){ // goes through every number lower than i, and divides i by that number
            if (i % j === 0){ // if i / number has no remainder
                flag = 1; // i is not prime
                break; // break out of loop
            }
        }
    
        if (flag === 0){ // if i is greater than 3 and not flagged
            console.log(`${i} is prime.`); // i is prime
            m = i;
            console.log(m);
            if (m > n) {
                break;
            }
            
        }
    }
}
console.log(`The next prime number after ${n} is ${m}`);
