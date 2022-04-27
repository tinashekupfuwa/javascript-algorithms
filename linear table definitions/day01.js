//linear table is a sequence of elements.its a one-dimensional array.

let scores = [40, 56, 22, 43, 10, 21, 42, 67];


for (let i = 0; i < scores.length; i++) { 
  console.log(scores[i]+`,`);
}



/* Maximum of integer sequences-------------------------------------------------------------------------- */

const maxArray = (maxinteger) => { 
  for (let i = 0; i < maxArray.length; i++) { 
    if (maxinteger[i] < maxinteger[i + 1]) { 
      let temp = maxinteger[i + 1];
      maxinteger[i] = maxinteger[i + 1];
      maxValue = maxinteger[maxinteger.length-1];

    }
  }
  return maxValue;
}



console.log(maxArray(scores));

/* Bubble sort algorithm-------------------------------------------------------------------------- */

const Bubblesort = (numArray) => { 
  for (let i = 0; i < scores.length; i++) {
    if(numArray[i]<numArray[])
   }
}