function isValid(s: string): boolean {

    const bracketsMap: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let openBracketsStack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i]

        if (['(', '[', '{'].includes(currentBracket)) {
            openBracketsStack.push(currentBracket)
        } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
            return false
        }
    }
    return !openBracketsStack.length
}

console.log(isValid("()"))