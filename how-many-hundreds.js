function howManyHundreds(number){
  return (number - (number % 100)) / 100;
}

console.log(howManyHundreds(100));
console.log(howManyHundreds(894));
console.log(howManyHundreds(666));