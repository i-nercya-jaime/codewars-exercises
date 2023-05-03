export function order(words: string):string{
    return words.split(' ').sort(function(a: any, b: any){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}  

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));