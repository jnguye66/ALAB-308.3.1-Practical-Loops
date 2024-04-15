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
            if (m > n) { // Break out of loop ONLY when m is greater than n
                break;
            }
            
        }
    }
}
console.log(`The next prime number after ${n} is ${m}`);

///////////////////////////////////////////////////////////////////////////////////////////
// Part 3: Feeling Loop

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let csvSplit = csv.split(/[,\n]+/); // Use '/ /' RegExp operator to apply multiple seperators, in this case , and \n
// console.log(csvSplit);

let cell1 = [];
let cell2 = [];
let cell3 = [];
let cell4 = [];
let cell5 = [];

let place = 0;

for (let i = 0; i <= csv.length; i++){
    cell1.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell1 = cell1.join("");
cell1 = cell1.split(/[,\n]+/);
console.log(cell1);


for (let i = place + 1; i <= csv.length; i++){
    cell2.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell2 = cell2.join("");
cell2 = cell2.split(/[,\n]+/);
console.log(cell2);

for (let i = place + 1; i <= csv.length; i++){
    cell3.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell3 = cell3.join("");
cell3 = cell3.split(/[,\n]+/);
console.log(cell3);

for (let i = place + 1; i <= csv.length; i++){
    cell4.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell4 = cell4.join("");
cell4 = cell4.split(/[,\n]+/);
console.log(cell4);

for (let i = place + 1; i <= csv.length; i++){
    cell5.push(csv[i]);
    if (csv[i] === "\n"){
        place = i;
        break;
    }
}
console.log(place);
cell5 = cell5.join("");
cell5 = cell5.split(/[,\n]+/);
console.log(cell5);

console.log(`${cell1}\n
${cell2}\n
${cell3}\n
${cell4}\n
${cell5}\n`)