const checkForSpam = function(message) {

    const word1= '[spam]';
    const word2= 'sale';
    let lower= message.toLowerCase()
    if(  lower.includes( word1) || lower.includes(word2)){
return true
    }
    else{
        return false
    }
}
  
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true