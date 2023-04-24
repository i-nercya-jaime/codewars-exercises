function countBits(n: number): number {
    const binaryString: string = n.toString(2);
    const binaryArray: string[] = binaryString.split('');
    const oneSet: Set<string> = new Set(['1']);
  
    return binaryArray.filter((bit) => oneSet.has(bit)).length;
  }
  
  console.log(countBits(7))