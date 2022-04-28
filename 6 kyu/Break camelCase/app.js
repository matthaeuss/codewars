//Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return [...string].map((letter) => letter.charCodeAt() < 97 ? ` ${letter}` : letter).join('');
}

solution("camelCasing");