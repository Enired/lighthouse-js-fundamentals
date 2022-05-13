const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let bestSubmissionName = "";
  let currentBestMetricVal = 0;
  for(let vegetable of vegetables){
    if(Number(vegetable[metric]) > currentBestMetricVal){
      currentBestMetricVal = Number(vegetable[metric]);
      bestSubmissionName = vegetable['submitter'];
    }
  }
  return bestSubmissionName;
}

// For testing - Uncomment for test.
// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'redness'

// console.log(judgeVegetable(vegetables, metric));

//Expected result
//"Old Man Franklin"