export function isIsogram(str: string): any{

    const letrasSet: Set<string> = new Set();
    const lowercaseWord: string = str.toLowerCase();

    for(let letra of lowercaseWord){
        if(letrasSet.has(letra)){
            return false;
        } else {
            letrasSet.add(letra);
        }
    }
    return true;
  }

  console.log(isIsogram("hello"))
