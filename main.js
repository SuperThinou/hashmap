import { Hashmap } from "./Hashmap.js";

const test = new Hashmap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// console.log(test.buckets);

// Overwrite values test

test.set("apple", "green");
test.set("banana", "green");
// console.log(test.buckets);

// Load factor exceedance test

test.set("moon", "silver");
test.set("car", "black");
test.set("sky", "blue");
test.set("grass", "green");
// console.log(test.buckets);

// set function test with the new hashes

test.set("moon", "grey");
test.set("car", "grey");
// console.log(test.buckets)

// Remove function test

test.remove("grass");
test.remove("apple");
console.log(test.buckets);

// get function test

console.log(test.get("banana"));
console.log(test.get("kiwi"));

// length function test
console.log(test.length());

// keys function test
console.log(test.keys());

// values function test
console.log(test.values());

// entries function test
console.log(test.entries());

test.clear();
console.log(test.buckets);
