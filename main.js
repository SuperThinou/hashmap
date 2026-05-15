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

// Remove function test
test.remove("moon");
test.remove("apple");

console.log(test.buckets);
