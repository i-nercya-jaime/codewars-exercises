/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  
    let v: number = 0;
    let ret: number[] = [];
  
    for(let c of data){
      switch(c){
        case 'i' : v++;         break;
        case 'd' : v--;         break;
        case 's' : v=v*v;       break;
        case 'o' : ret.push(v); break;
        
      }
    }
  
    return ret;
  }

  console.log(parse("iiiiiisdsssdo"))