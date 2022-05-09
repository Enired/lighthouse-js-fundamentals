const whichSchool  = function (age) {
  //Checking for Elementary School
  if(age < 13){
    return 'Elementary School';
  }
  //Checking for Secondary School
  else if(age >= 13 && age <= 18){
    return 'Secondary School';
  }
  //Only Lighthouse
  else{
    return 'Lighthouse Labs'
  }
}