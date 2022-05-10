const isEven = function(num){
  return num % 2 === 0;
}

const tenEven = isEven(10);
const elevenEven = isEven(11);
const twoEven = isEven(2);

console.log(tenEven);
console.log(elevenEven);
console.log(twoEven);

console.log(isEven(3));
console.log(isEven(700));
console.log(isEven(100000000003));
