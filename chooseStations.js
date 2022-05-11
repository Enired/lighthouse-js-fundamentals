const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let apprStations = [];
  for(let station of stations){
    let location = station[0];
    let capacity = station[1];
    let facility = station[2];

    if(capacity >=20 && (facility === "school" || facility === "community centre")){
      apprStations.push(location);
    }
    
  }
  return apprStations;
}
let apprStations = chooseStations(stations);
console.log(apprStations);