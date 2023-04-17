export function humanReadable(seconds:number):string {
    let minutes: number = 0;
    let hours: number = 0;
    
    if (seconds >= 3600) {
      hours = Math.floor(seconds/3600);
      seconds -=  3600 * hours;
      if (seconds >= 60) {
        minutes = Math.floor(seconds/60);
        seconds -= 60 * minutes;
      }
    } else if (seconds >= 60) {
      minutes = Math.floor(seconds/60);
      seconds -= 60 * minutes;
    } 

    return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
  }

  console.log(humanReadable(35406))