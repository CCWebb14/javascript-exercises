const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if (!(Number.isInteger(num1)
    && Number.isInteger(num2))){
        return "ERROR";
    }

    result = 0;
    if(num1 > num2){
        largeNum = num1;
        smallNum = num2;
    }
    else{
        largeNum = num2;
        smallNum = num1;
    }
    for(;smallNum <= largeNum; smallNum++){
        result+=smallNum;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
