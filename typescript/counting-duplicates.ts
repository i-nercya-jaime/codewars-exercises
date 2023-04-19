export function duplicateCount(text: string): number{
    
    const str = text.toLowerCase()
    let countDuplicates: number = 0 
    let arrayDuplicates: string[] = []

    if (text = ""){
        return 0
    } else{
        for (let i = 0; i < str.length; i++) {
            if (!arrayDuplicates.includes(str[i])) {
              if (str.indexOf(str[i], i + 1) !== -1) {
                countDuplicates++
                arrayDuplicates.push(str[i])
              }
            }
          }
        }
    
    return countDuplicates
  }

  console.log(duplicateCount("jaiiaiawwmeeee"))