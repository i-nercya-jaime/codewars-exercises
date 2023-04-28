/* Doing exercises from: https://github.com/Nooder/javascript-in-depth/tree/main/015-maps to practice Set.

Exercise 1: 
 1. Create an array called "points" with the following values: [10, 20, 10, 30, 15, 15, 35, 60, 10] */

 const points: number[] = [10, 20, 10, 30, 15, 15, 35, 60, 10];

 // 2. How can you print out all the UNIQUE points inside "points"?

 const pointsSet = new Set(points);

 console.log(pointsSet)

/*
Exercise 2:

1. Create an array called "numbers" with the following values: [10, 20, 15, 30, 15, 20, 35, 60, 10] */

const numbers: number[] = [10, 20, 30, 15, 15, 35, 60];

// 2.  Find the first duplicate value in "numbers" and print it out to the terminal

const seenNumbers = new Set();

for(let i = 0; i < numbers.length; i++){
    if(seenNumbers.has(numbers[i])){
        console.log(numbers[i]);
    }
    seenNumbers.add(numbers[i]);
}

/*
Exercise 3:

1. Create an array called "items" with the following values: */
interface Item {
    name: string;
    quantity: number;
    price: number;
}
const items: Item[] = [
    {name: "banana", quantity: 1, price: 1.95},
    {name: "apple", quantity: 1, price: 1.45},
    {name: "banana", quantity: 10, price: 0.05},
    {name: "candy", quantity: 1, price: 3.50}
]

// 2. Create a second array called "results" that starts off empty.
const results: Item[] = [];

// 3. Create a Set called "duplicates".
const duplicates = new Set<string>();

// 4. Add all the Objects in "items" to "results" in order, while skipping over any duplicate-named
// objects you encounter within "items" (In this example, only add the first banana item)

for (let i = 0; i < items.length; i++) {
    if (duplicates.has(items[i].name)) {
      continue;
    }
    results.push(items[i]);
    duplicates.add(items[i].name);
}

console.log(results);

