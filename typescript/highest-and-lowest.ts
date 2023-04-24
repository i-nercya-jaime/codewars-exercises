export class Kata {
    static highAndLow(numbers: string): string {
      
    const numberSet: Set<number> = new Set();
    const numArr: string[] = numbers.split(" ");
  
    for (let num of numArr) {
      numberSet.add(parseInt(num));
    }
  
    const maxNum: number = Math.max(...numberSet);
    const minNum: number = Math.min(...numberSet);
  
    return `${maxNum} ${minNum}`;
  }
}