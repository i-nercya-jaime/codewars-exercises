/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
EXAMPLE
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;*/

export function countSmileys(arr: string[]) {
    let smileys: string[] = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    let count: number = 0;
  
    for (var i = 0; i < arr.length; i++){

      for (var j = 0; j < smileys.length; j++){
        
        if (arr[i] === smileys[j]){
          count++;
         }
      }
    }
  return count;
  }

  export function countSmileys2(arr: string[]) {
    return arr.filter(i => /^[:;][~-]?[D\)]$/.test(i)).length;
  }

  
console.log(countSmileys([':D',':~)',';~D',':)']))
console.log(countSmileys2([':D',':~)',';~D',':)']))