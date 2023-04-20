/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained. 
---------------------------------------------------------------------------------------------------
EXAMPLES: 
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" 

---------------------------------------------------------------------------------------------------*/

export function reverseWords(str: string): string {
    
    let reversedWords: string[] = [];
    let words: string[] = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = "";
        
        for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
  }

  export function reverseWords2(str: string): string {
  
    /*  1. Crear un array con las palabras originales
        2. Bucle a través de cada palabra y creamos un array de caracteres
        3. Dar la vuelta al array y hacerlo string
        4. join the resulting array */
    
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }

  console.log(reverseWords("Jaime"))
  console.log(reverseWords2("Jaime"))
