const fibonacci = function(member) {
    if(member <0){
        return "OOPS";
    }
    resArray = [];
    for(let i =0; i<member; i++){
        if(i<2){
            resArray.push(1);
        }
        else{
            resArray.push(resArray[i-1] + resArray[i-2]);
        }
    }


    return resArray[member-1];
};

// Do not edit below this line
module.exports = fibonacci;
