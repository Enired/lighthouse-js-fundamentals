function lastIndexOf(array, value){
  let lastPosition = -1;
  for(let i = 0; i < array.length; i++){  
    if(array[i] === value){
      lastPosition = i;
    }
  }
  return lastPosition;
}

//Test Case
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));