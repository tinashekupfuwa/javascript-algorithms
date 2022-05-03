const maxValue = (randArray) => { 
  for (let i = 0; i < randArray.length-1;i++) { 
    if (randArray[i] > randArray[i+1]) {  // this finds maximum value, changing the inequality gives the opposite.
      let temp = randArray[i];
      randArray[i] = randArray[i + 1];
      randArray[i + 1] = temp;
    }
  }
    let maximumValue = randArray[randArray.length-1];
    return maximumValue;
}

let ramNumbers = [40, 34, 54, 89, 3, 23, 765];

export { maxValue, ramNumbers };