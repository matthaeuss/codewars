// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    return [...`${num}`]
      .reduce((acc, ce, idx, arr) => acc + (acc.length === 0 ? ce : (ce % 2 && arr[idx - 1] % 2) ? `-${ce}` : ce), '')
 }

 