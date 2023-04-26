import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  
  
  function decodeMorseLetter(letter: string){
      return MORSE_CODE[letter];
  }
  
  function decodeMorseWord(word: string) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
