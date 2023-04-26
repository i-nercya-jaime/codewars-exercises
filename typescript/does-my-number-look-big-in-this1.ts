export function narcissistic(value: number): boolean {
    
   var val: string[] = (value + '').split('');
   let sum: number = 0;

   for(let v of val) {
     const num = parseInt(v);
     sum += Math.pow(num, val.length);
   }
   return sum === value;
 }

 console.log(narcissistic(1634))