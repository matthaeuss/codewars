// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let reverse = x.toLowerCase().split('').reverse().join('')
  
    return (reverse == x.toLowerCase()) ? true : false
}
isPalindrome('nope')