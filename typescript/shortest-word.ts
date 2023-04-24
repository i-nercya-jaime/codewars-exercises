function findShort(s: string): number {

    const str: string[] = s.split(" ");
    let shortest: string = str[0];
  
    for(let i = 1; i < str.length; i++) {
      if(str[i].length < shortest.length) {
        shortest = str[i];
      }
    }
    return shortest.length;
  }

function findShort2(s: string): number {
    const words: string[] = s.split(' ');
    const lengths: number[] = words.map((word) => word.length);
    return Math.min(...lengths);
}
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
  console.log(findShort2("bitcoin take over the world maybe who knows perhaps"))