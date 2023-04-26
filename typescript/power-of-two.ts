export function isPowerOfTwo(n: number): boolean {
    return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(4096))
