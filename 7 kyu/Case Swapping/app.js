//Given a string, swap the case for each of the letters.
//
// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swap(str){
    return [...str].map((el) => el.charCodeAt() < 97? el.toLowerCase() : el.toUpperCase()).join('')
}

swap("Some kind of a masterpiece");

