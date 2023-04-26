export function arrayDiff(a: number[], b: number[]): number[] {

    let myArray: number[] = [];

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] !== b[j]){
                myArray.push(a[i])
            }
        }
    }
    return myArray;
}
  
export function arrayDiff2(a: number[], b: number[]): number[] {

    return a.filter(e => !b.includes(e));

}

console.log(arrayDiff([1, 5], [5]))
console.log(arrayDiff2([1, 5], [5]))