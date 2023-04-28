/*function findOdd2(arr: number[]): number {
    const countMap = new Map<number, number>();
  
    arr.forEach(num => {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    });
  
    const oddSet = new Set<number>();
    for (const [num, count] of countMap.entries()) {
      if (count % 2 !== 0) {
        oddSet.add(num);
      }
    }
  
    if (oddSet.size !== 1) {
      throw new Error("Input array does not contain exactly one integer that appears an odd number of times.");
    }
  
    return oddSet.values().next().value;
  }*/
  
export const findOdd = (items: number[]): number => {

    for (const item of items) {
      if (items.filter(i => i === item).length % 2 !== 0) {
        return item;
      }
    }
  
    throw new Error('none found');
}

console.log(findOdd([1, 1, 5, 5, 6, 15, 15, 15, 15, 15, 86]))