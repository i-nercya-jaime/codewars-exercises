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