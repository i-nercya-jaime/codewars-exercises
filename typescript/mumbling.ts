export function accum(s: string): string {
  
    const result: string[] = []
    const lowerStr: string = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
}
  
console.log(accum("Jaimeediezlpezz"))