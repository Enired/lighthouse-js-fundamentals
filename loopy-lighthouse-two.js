function loopyLighthouse(rangeArray, multiplesArray, words) {
  for (let i = rangeArray[0]; i <= rangeArray[1]; i++) {
    if (i % multiplesArray[0] === 0 && i % multiplesArray[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiplesArray[0] === 0) {
      console.log(words[0]);
    } else if (i % multiplesArray[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);