const removeFromArray = function() {

    if (arguments.length === 1){
        return arguments[0];
    }
    // This did not work
    // let args = [...arguments];
    let args = Array.from(arguments);
    let sentArray = args[0];
    let toDel = args.slice(1);

    for(let x = 0; x < toDel.length; x++)
        for(let i = 0; i < sentArray.length; i++){
            if (toDel[x] === sentArray[i]){
                sentArray.splice(i, 1);
                x--;
                i--;
            }
        }
    return sentArray;
};

// Do not edit below this line
module.exports = removeFromArray;
