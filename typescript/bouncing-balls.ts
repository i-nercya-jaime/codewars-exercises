export function bouncingBall(h: number, bounce: number, window: number): number {

    if (h > 0 && (bounce > 0 && bounce < 1) && window < h){
      
        return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 

    } else {
      return -1
    }

  }

  console.log(bouncingBall(3, 0.66, 1.5))