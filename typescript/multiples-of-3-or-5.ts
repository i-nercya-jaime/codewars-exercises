export class Challenge {
    static solution(number: number) {

        let multiplos: number[] = [];
        if(number < 0){
            return 0
        } else {
            for(let i = 0; i < number; i++){

                if(i % 3 == 0 || i % 5 == 0){
                    multiplos.push(i);
                }
            }

            let sumaMultiplos: number = 0;
            for (let i: number = 0; i < multiplos.length; i++) {
                sumaMultiplos += multiplos[i];
              }

            return sumaMultiplos;

        }
    }
  }
  