// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

    let first = str.split(/-|_/g).shift()
    let action = str.split(/-|_/g).slice(1)
  
    return first + action.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join('')
  }