const smartGarbage = function (trash, bins) {
  //Checking that there is a bin for the trash
  if(bins[trash]){
    bins[trash]++; //Updating matching trash bin key-value pairs
    console.log('Deposited')
    return bins; //Return object key-value pairs
  }
  else{
    console.log('No appropriate bin available'); //Displayed if no matching property within the object.
    return bins;
  }
}
// For testing purposes.
// smartGarbage('recycling', { waste: 10, recycling: 10, compost: 10 });
// smartGarbage('glass', { waste: 4, recycling: 2, compost: 5 });
