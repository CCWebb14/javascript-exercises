const repeatString = function(word, x) {
    result = "";
    if (x < 0){
        return "ERROR";
    }
    
    for(let i = 0; i < x; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
