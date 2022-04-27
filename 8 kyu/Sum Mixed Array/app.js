//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.

function sumMix(x){
    return x.reduce((acc, x) => acc + parseInt(x), 0)
}

sumMix(10, 20, '42', 100)