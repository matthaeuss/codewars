// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     Array can contain numbers or strings. X can be either.
//
//     Return true if the array contains the value, false if no

function check(a,x){
    return a.includes(x);
};

check([1, 2, 4], 4)