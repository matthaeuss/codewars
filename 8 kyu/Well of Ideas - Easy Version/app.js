// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(test){

    let num =  test.filter(a => a == 'good').length
    
    if(num > 0 && num <= 2){
      return 'Publish!'
    }else if(num > 2){
      return 'I smell a series!'
    }else{
      return 'Fail!'
    }      
}