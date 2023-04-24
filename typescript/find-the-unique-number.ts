export function findUniq(arr: number[]): number {
    
    const numberSet: Set<number> = new Set();

    for (let num of arr) {
        if (numberSet.size === 0 || numberSet.has(num)) {
        numberSet.add(num);
        } else {
        return num;
        }
    }

    return -1;
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // returns 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // returns 0.55
