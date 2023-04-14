/* 6kyu kata

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] 
------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const towerBuilder = (nFloors: number): string[] => {
    
    let print: string[] = [];

    for(let i = 0; i < nFloors; i++){
        print.push(" ".repeat(nFloors - i -1) + "*".repeat((i * 2) + 1)+" ".repeat(nFloors - i - 1))
    }
    return print

  }

