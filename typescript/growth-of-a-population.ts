/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new 
inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
-----------------------------------------------------------------------------------------------------------------------------------------------------------
|Examples:                                                                                                                                                 |
|nb_year(1500, 5, 100, 5000) -> 15                                                                                                                         |
|nb_year(1500000, 2.5, 10000, 2000000) -> 10                                                                                                               |
|Note:                                                                                                                                                     |
|Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02. |
-----------------------------------------------------------------------------------------------------------------------------------------------------------  */
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let year = 0
    
    while (p0 < p) {
      p0 += Math.floor(p0 * percent / 100) + aug
      year++
    }
    
    return year
  }


