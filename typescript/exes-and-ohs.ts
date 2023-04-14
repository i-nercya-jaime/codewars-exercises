/*
Check to see if a string has the same amount of 'x's and 'o's. The method must 
return a boolean and be case insensitive. The string can contain any char.
------------------------------------------------------------------------------
EXAMPLES:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
------------------------------------------------------------------------------*/

export function xo(str: string) : boolean {
    let contadorX: string = '';
    let contadorO: string = '';

    for(let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() === 'x') {
            contadorX+= str[i];
        } else if (str[i].toLowerCase() === 'o'){
            contadorO += str[i];
        }
    }
    return contadorX.length === contadorO.length;
}
    