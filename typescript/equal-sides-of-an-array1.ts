export function findEvenIndex(arr: number[]): number{

    var sum: number = 0;
    let leftSum: number = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    for(let i = 0; i < arr.length; i++){
        sum -= arr[i]
    
        if(leftSum === sum){
            return i;
        } else {
            leftSum += arr[i];
        }

    }

    return -1;
}