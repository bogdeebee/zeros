module.exports = function zeros(expression) {
  // your solution
  
  const stringInputArr = expression.split('*');
  let factorialDerivativesArr = [];
  let factorizedArr = [];
  let resultSumZeros = 0;
  let counterTwos = 0;
  let counterFives = 0;

  for (let indexStringInputArr = 0; indexStringInputArr < stringInputArr.length; indexStringInputArr++) {
    let stringFactorial = stringInputArr[indexStringInputArr];
    let number = parseInt(stringFactorial);

    if (stringFactorial.endsWith('!!')) {
      factorialDerivativesArr = getDerivativesArr(number, true);
    } else {
      factorialDerivativesArr = getDerivativesArr(number);
    }

    for (let i = 0; i < factorialDerivativesArr.length; i++){
      factorizedArr.push(getFactorizedArr(factorialDerivativesArr[i]));
    }
  }

  let normalizedArr = getNormalizedArr(factorizedArr);

  normalizedArr.forEach(function searchTwosAndFives(element) {
    if (element === 2) {
      counterTwos += 1;
    } 
  
    if (element === 5) {
      counterFives += 1;
    }
  });

  if (counterTwos <= counterFives) {
    resultSumZeros = counterTwos;

    return resultSumZeros;
  } else {
    resultSumZeros = counterFives;

    return resultSumZeros;
  }

  function getFactorizedArr(number) { 
    let resultArr = [];

    for (let i = 2; i <= Math.sqrt(number); i++) {
      while (number % i === 0) {
        resultArr.push(i);
        number /= i;
      }
    }

    if (number !== 1) {
      resultArr.push(number);
    }

    return resultArr;
  }

  function getDerivativesArr(number, isDouble = false) {
    let resultArr = [];
  
    if (number <= 1) {
      return resultArr;
    }
    
    if (isDouble === false) {
      for (let i = 2; i <= number; i++) {
        resultArr.push(i);
      }
      
      return resultArr;
    }
    
    if (number % 2) {
      for (let i = 3; i <= number; i += 2) {
        resultArr.push(i);
      }
      
      return resultArr;
    }
  
    for (let i = 2; i <= number; i += 2) {
      resultArr.push(i);
    }
  
    return resultArr;
  }

  function getNormalizedArr(inputArr) {
    let resultArr = [];
    
    for (let i = 0; i < inputArr.length; i++) {
      resultArr = resultArr.concat(inputArr[i]);
    }
    
    return resultArr;
  }
}
