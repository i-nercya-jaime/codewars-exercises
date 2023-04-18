export function spinWords(words: string): string {
    
    let wordsArr = words.split(' ');
    
    for (let i = 0; i < wordsArr.length; i++) {
     if (wordsArr[i].split('').length >= 5) {
         wordsArr[i] = wordsArr[i].split('').reverse().join('')
     }
    }
    return wordsArr.join(' ')    
  }

  console.log(spinWords("Hola mi nombre es jaime"))