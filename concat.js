function concat(arrayOne, arrayTwo){
  for(let value of arrayTwo){
    arrayOne.push(value);
  }
  return arrayOne
}

//Test
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));