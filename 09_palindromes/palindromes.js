const palindromes = function (inStr) {
    let filtStr = inStr.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,""); 

    filtStr = filtStr.toLowerCase();

    let strArr = filtStr.split("");

    // remove middle element if odd length
    if((strArr.length%2) != 0) {
        strArr.splice(Math.floor(filtStr.length/2), 1);
    }

    let revArr = (strArr.splice(0, filtStr.length/2)).reverse();

    strArr = strArr.join("");
    revArr = revArr.join("");

    return(strArr === revArr);
}

// Do not edit below this line
module.exports = palindromes;
