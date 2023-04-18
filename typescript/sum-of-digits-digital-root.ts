export function digitalRoot(n: number): number {

    let sum: number = n;

    while (sum >= 10) {
      let digits: number[] = Array.from(String(sum), Number);
      sum = 0;
      for (let i: number = 0; i < digits.length; i++) {
        sum += digits[i];
      }
    }
    return sum;
  }
  
  console.log(digitalRoot(548675))