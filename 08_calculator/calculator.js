const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(inArray) {
  let result = 0;
	for(let i = 0; i<inArray.length; i++){
      result += inArray[i];
  }
  return result;
};

const multiply = function(inArray) {
  let result = 1;
	for(let i = 0; i<inArray.length; i++){
      result *= inArray[i];
  }
  return result;
};

const power = function(num1, num2) {
  let result = num1;
	for(; num2>1; num2--){
    result *= num1;
  }
  return result;
};

const factorial = function(num1) {
  if(num1 === 0){
    return 1;
  }
  let result = num1;
  for(; num1>1; num1--){
	  result *= num1 - 1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
