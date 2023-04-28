export function longestConsec(strarr: string[], k: number): string {

    let longitudArr: number = strarr.length;
    let arr: string[] = [];
    
    if(longitudArr === 0 || k > strarr.length || k <= 0){
        return "";
    } else {
        for(let i = 0; i <= longitudArr - k; i++){
            let current = strarr[i];
            for(let ii = k, jj = 1; ii > 1; ii--, jj++){
              current += strarr[i+jj]
            }
          arr.push(current);
          }
         return arr.reduce(function (a: string, b: string): string {
                return a.length > b.length ? a : a.length == b.length ? a : b;
            });
    }
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3));
