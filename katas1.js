function oneThroughTwenty() {
    let num = [];
  for (let i = 1; i <= 20; i++){
    num.push(i)
  }   
  return num;  
}
console.log(oneThroughTwenty());

function evensToTwenty() {
  let par = [];
  for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
      par.push(i);
    }
  }   
  return par;  
}
console.log(evensToTwenty());

function oddsToTwenty() {
    
  let impar = [];
  for (let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
      impar.push(i);
    }
  }   
  return impar;  
}
console.log(oddsToTwenty());

function multiplesOfFive() {
    
  let multi = [];
  for (let i = 5; i <= 100; i+=5) {
    multi.push(i)
  }
  return multi;
}

console.log(multiplesOfFive());

function squareNumbers() {
    
  let squar = [];
  for (let i = 1; i <= 10; i++) {
      squar.push(i * i);
  }
    return squar;
}
console.log(squareNumbers());

function countingBackwards() {
    
  let numInvert = [];
  for (let i = 20; i >= 1; i--) {
    numInvert.push(i);
  }
  return numInvert;
}

console.log(countingBackwards());

function evenNumbersBackwards() {
    
  let parInvert = [];
  for (let i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
      parInvert.push(i);
    }
  }
  return parInvert;
}
console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
    
  let imparInvert = [];
  for (let i = 20; i >= 1; i--) {
    if (i % 2 !== 0) {
      imparInvert.push(i);
    }
  }
  return imparInvert;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
  let multiInvert = [];
  for (let i = 100; i >= 1; i-= 5) {
    multiInvert.push(i);
  }
  return multiInvert;
}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
  let squarInvert = [];
  for (let i = 10; i * i >= 1; i--) {
      if (i * i <= 100){
      squarInvert.push(i * i);
      }
    }
    return squarInvert;
}

console.log(squareNumbersBackwards());
