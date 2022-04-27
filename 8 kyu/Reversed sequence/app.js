//Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    return [...Array(n+1).keys()].slice(1, n+1).reverse();
};

reverseSeq(10)