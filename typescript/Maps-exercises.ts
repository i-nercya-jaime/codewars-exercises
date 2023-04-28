/* Doing exercises from: https://github.com/Nooder/javascript-in-depth/tree/main/015-maps to practice Maps.

1. Create a Map called "myPet" with the following entries:
- name -> "Sudo"
- type -> "Dog"
- breed -> "Poodle"
- age -> 7
- friends -> ["Bit", "Byte", "Data"]*/

const myPet = new Map<string, any>(); 

myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);

// 2. Print out "myPet" to the terminal

console.log(myPet);

// 3. Add a new entry: colour -> "Black"

myPet.set("colour", "black");

// 4. Change "breed" to be "Beagle"

myPet.set("breed", "Beagle");

// 5. Remove "Data" from the list of friends for "myPet"

myPet.get("friends").pop();

// 6. Print out "myPet" to the terminal again

console.log(myPet)

// 7. Add "Chip" to the list of friends for "myPet"

myPet.get("friends").push("Chip");

// 8. Print out "myPet" to the terminal again

console.log(myPet);


//Exercise 2

// 1. Create the following 3 objects:

const banana = {name: "banana", quantity: 1, price: 1.95}
const apple = {name: "apple", quantity: 1, price: 1.45}
const candy = {name: "candy", quantity: 1, price: 3.50}

// 2. Create a Map called "store" with the following entries:

const store = new Map<string, any>();
store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

// 3. Print out "store" to the terminal

console.log(store);

// 4. Only print out all the product objects in "store"

for(let i = 0; i < store.get("products").length; i++){
    console.log(store.get("products")[i]);
}

// 5. Only print out the 3rd product object in "store"

console.log(store.get("products")[2]);

// 6. Change the price of the banana object through the store Map to be 1.75..

store.get("products")[0].price = 1.75;

// 7. Print out both "store" and "banana"

console.log(store);
console.log(banana);

// 8. Change the price of the candy object directly to be 4.99

candy.price = 4.99;

// 9. Print out both "store" and "candy"

console.log(store);
console.log(candy);

/* Exercise 3:
1. Create a Map called "houseForSale" with the following entries:
    - area -> 940
    - value -> 320000
    - streetName -> "Fifth Street"
    - built -> "2012"
    - owner -> {name: "Blake", age: 29}
    - offers -> [290000, 295000, 315000, 312000] */

const houseForSale = new Map<string, any>();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", 2012);
houseForSale.set("owner", {name: "Blake", age: 29});
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

// 2. Print out "houseForSale" to the terminal

console.log(houseForSale);

// 3. Delete the entry with the key "built"

houseForSale.delete("built");

// 4. Change the age of the owner to be 30 inside "houseForSale"

houseForSale.get("owner").age = 30

// 5. Print out the maximum offerPrice (use reduce)

const maxPrice = houseForSale.get("offers").reduce((max: number, price: number) => {
    if(price > max){
        return price
    } 
    return max
});

console.log(maxPrice);

// 6. Add a new entry: "sale price" -> 312000

houseForSale.set("sale price", 312000);

// 7. Print out "houseForSale" to the terminal

console.log(houseForSale);
