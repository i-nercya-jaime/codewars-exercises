export const isPangram = (phrase: string): boolean => {
    const allLetters = "abcdefghijklmnopqrstuvwxyz";
    const allLettersArr = allLetters.split("");
    const phraseArr = phrase.toLowerCase().split("");
    return allLettersArr.every(alphabet => phraseArr.includes(alphabet));
}

console.log(isPangram("jaime"))