export function duplicateCount(text: string): number{
    
    const str = text.toLowerCase()
    let countDuplicates: number = 0 
    let arrayDuplicates: string[] = []

    if (text = ""){
        return 0
    } else{
        for (let i = 0; i < str.length; i++) {
            if (!arrayDuplicates.includes(str[i])) {
              if (str.indexOf(str[i], i + 1) !== -1) {
                countDuplicates++
                arrayDuplicates.push(str[i])
              }
            }
          }
        }
    
    return countDuplicates
  }


export function duplicateCount3(text:string): number{
  let result = new Set();

  text.toLowerCase();
  for(let i of text){
    if(text.split(i).length > 2){
      result.add(i)
    }
  }
  return result.size;
}

console.log(duplicateCount("jaiiaiawwmeeee"))
console.log(duplicateCount3("jaiiaiawwmeeee"))