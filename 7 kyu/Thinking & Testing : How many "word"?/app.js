//No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!

function testit(s){
    const w = [...'word'];
    const temp = [];

    [...(s.toLowerCase())]
        .filter(e => w.includes(e)).forEach(e => {
        const mod = temp.length % 4
        if (mod === 0 && w[0] === e) temp.push(e);
        if (mod === 1 && w[1] === e) temp.push(e)
        if (mod === 2 && w[2] === e) temp.push(e)
        if (mod === 3 && w[3] === e) temp.push(e)
    })

    return Math.floor(temp.length / 4);
}

testit('Ala ma kota');