// push meth add last element

var arr = ["a","b","c"];

arr.push("d");
console.log(arr); //  ["a", "b", "c", "d"]


// pop meth - removes the last element

console.log (arr.pop());
console.log(arr);


// concat meth combines arrays

var arr2 = ["g", "q"];
console.log(arr.concat(arr2)); //  ["a", "b", "c", "d", "g", "q"]
console.log (arr2);

// join - combine all element in array

console.log(arr.join("")); // abcd

// reverse meth - deploys element in reverse direction

console.log(arr.reverse()); // "d", "c", "b", "a"]
consol.log(arr); // ["d", "c", "b", "a"]

// shift meth - removes 1th elem in array

console.log(arr.shift()); // "c", "b", "a"]


// unshift meth - indicates the number of elements and adds a new first element

console.log(arr.unshift("p"));

// slice meth - display 2 arguments: n & n-1 // not modifite array

console.log(arr.slice(1,3)); //["c", "b"]

// sort meth - sorts the items on the the order

arr.push("i");
arr.push("f");
arr.sort(arr);
console.log(arr);  // ["a", "b", "c", "f", "i", "p"]

//// splice meth - display 2 arguments: n & n-1 // Modifite array!

console.log(arr.splice(2,2,"JS Nuggets")); // ["c", "f"]
console.log(arr); // ["a", "b", "JS Nuggets", "i", "p"]





























