export const pigIt = (a : string) : string =>  {

    const words: string[] = a.split(' ');
  
    return words
      .map((word) => {
        if (/^[a-zA-Z]+$/.test(word)) {
          const firstChar: string = word.charAt(0);
          const remainingChars: string = word.slice(1);
          return `${remainingChars}${firstChar}ay`;
        }
        return word;
      })
      .join(' ');
  }
  

console.log(pigIt("jaime diez lopez"));