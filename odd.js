function isOdd(number){
  return number % 2 !== 0;
}
function report(number){
  console.log(`${number} is odd: ${isOdd(number)}`);
}

report(3);
report(2);
report(1);