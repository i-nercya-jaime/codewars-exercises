export function number(busStops: [number, number][]): number {
    let people = 0;
    busStops.map(stop => {
        people += stop[0];
        people -= stop[1];
    });
    return people;
  }