function ageCalc(name, yearOfBirth, currentYear){
  let currentAge = currentYear - yearOfBirth;
  return `${name} is ${currentAge} years old.`;
}

console.log(ageCalc("Miranda", 1983, 2015));
console.log(ageCalc("Ferdinand", 1988, 2015));