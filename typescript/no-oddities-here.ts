export function noOdds(values: number[]): number[] {
 
  let valoresPares: number[] = [];
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0){
      valoresPares.push(values[i])
    }
  }

  return valoresPares;

}

console.log(noOdds([1, 2, 3, 4]));