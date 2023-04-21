export function noOdds(values: number[]): number[] {
 
  let valoresPares: number[] = [];
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0){
      valoresPares.push(values[i])
    }
  }

  return valoresPares;

}


export function noOdds2(values: number[]): number[] {
  // Return all non-odd values
  return values.filter(i => i % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4]));
console.log(noOdds2([1, 2, 3, 4]));