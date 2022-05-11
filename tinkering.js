const namesOfMyFriends = [['Ryan', 'Raymond', 'Gaston'], ['Kenny', 'Joseph', 'Michael', 'Kapo', 'Eric'], ['Angus', 'Luis', 'Tommy', 'Giselle'], ['Winnie', 'Ivan', 'Ceasar', 'Enzo', 'Mello', 'Marco']]

function playingWithArrays(element){
  for(let row = 0; row < element.length; row++){
    for(let column = 0; column < element[row].length; column++){
      const formattedString = `This is ${element[row][column]} and they are my friend!`;
      console.log(formattedString)
    }
  }
}

// playingWithArrays(namesOfMyFriends);

const arrayPlay = (element) => {
  for(let row = 0; row < element.length; row++){
    for(let column = 0; column < element[row].length; column++){
      const formattedString = `This is ${element[row][column]} and they are my friend!`;
      console.log(formattedString)
    }
  }
}

arrayPlay(namesOfMyFriends);