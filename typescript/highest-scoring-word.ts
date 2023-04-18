export function high(str: string): any {

    let cadena: string[] = str.split(" ");
    let max: number = 0;
    let res: string = '';
    
    for(let i = 0; i < cadena.length; i++){
        let s = cadena[i],
        val = 0;
    

    for(let j = 0; j < s.length; j++){
        val += (s.charCodeAt(j) - 96);
    }
    if(val > max){
        max = val;
        res = s;
    }
}

    return res;

}

console.log(high("hola mi nombre es Jaime"))
  