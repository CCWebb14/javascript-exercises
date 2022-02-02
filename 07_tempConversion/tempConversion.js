const ftoc = function(fTemp) {
  result = ((fTemp - 32)*5/9)
  if (result%1===0){
    return result;
  }

  return parseFloat(result.toFixed(1));
};

const ctof = function(cTemp) {
  result = (cTemp * 9/5 + 32)
  if (result%1===0){
    return result;
  }

  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
