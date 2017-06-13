// 1
var sandwich = ["peanut butter", "jelly", "bread"];

console.log(sandwich[1]); //selects the first element of the array - "jelly"

sandwich[1] = "bananas"; //changing the first element of the array on bananas
console.log(sandwich);

// 2
var teams = [["bulls",23],["white sox",45]];

console.log(teams[1][0]); //selects the first element of the second array:  white sox
teams[1][0] = "red sox" // changing the first element of the array on red sox
console.log(teams);

/* 3 Foreach- method*/

sandwich.forEach(function (element) {   //displays all elements of the array
    console.log(element);
});



