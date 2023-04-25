export function flattenAndSort(inputArray: number[][]): number[] {

    return inputArray
      .reduce((acc, itm) => acc.concat(itm), [])
      .sort((a, b) => a - b)
  }

  console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))