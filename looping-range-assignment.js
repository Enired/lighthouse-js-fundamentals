function range(start, end, step){
  let numbers = [];
  if(step > 0){
    for(let counter = start; counter <= end; counter += step){
      numbers.push(counter);
    }
    return numbers;
  }
  else{
    return numbers;
  }
  
}

console.log(range(0,10,2))