// Part 1: Fizz Buzz

for (i = 1; i <= 100; i++) {
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
