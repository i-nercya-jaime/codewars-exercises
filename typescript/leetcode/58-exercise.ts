function lengthOfLastWord(s: string): number {
    return s.split(" ").reverse().find((word) => word.length >= 1)!.length;
};


console.log(lengthOfLastWord("Jaime Diez Lopez"))