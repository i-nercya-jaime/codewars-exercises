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


export function duplicateCount2(text: string): number{

// Creamos charCount, es un map que mantiene un recuento de cuantas veces aparece
// cada letra en la cadena de entrada text.
  const charCount = new Map<string, number>();
// Creamos duplicates, es un set que registra los caracteres que aparecen más de una vez.
  const duplicates = new Set<string>();

  const chars = text.toLowerCase().split("");

  const duplicateChars = chars.filter((char) => {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char)! + 1);
      duplicates.add(char);
      return true;
    } else {
      charCount.set(char, 1);
      return false;
    }
  });
  return duplicates.size;

}

export function duplicateCount3(text:string): number{
  let result = new Set();

  for(let i of text.toLowerCase()){
    if(text.split(i).length > 2){
      result.add(i)
    }
  }
  return result.size;
}
  console.log(duplicateCount("jaiiaiawwmeeee"))
  console.log(duplicateCount2("jaiiaiawwmeeee"))
  console.log(duplicateCount3("jaiiaiawwmeeee"))