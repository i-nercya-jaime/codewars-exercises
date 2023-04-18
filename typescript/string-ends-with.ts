export function solution(str: string, ending: string): boolean {
    
    if (str.endsWith(ending)){
        return true
    } else {
        return false
    }


  }

  console.log(solution("Jaime", "ime"));