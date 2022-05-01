//linear table is a sequence of elements.its a one-dimensional array.

const people = [
  {
    first: `tinashe`,
    last: `kupfuwa`,
    IDNumber:`43986-l07`
  },
    {
    first: `jasper`,
    last: `king`,
    IDNumber:`482186-S91`
  },
      {
    first: `tinashe`,
    last: `kupfuwa`,
    IDNumber:`128686-g12`
  },
]


const printArray = (setArray) => { 
  for (let i = 0; i < setArray.length; i++) { 
    console.log(setArray[i])
  }
}  

export { people, printArray}