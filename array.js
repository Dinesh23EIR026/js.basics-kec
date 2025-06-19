let veg = ["carrot", "beans", "tomato", "potato"];
console.log("Original array");
console.log(veg);
console.log("Elements of the array");

veg.push("onion");
console.log(veg, "pushing onion")

veg.pop();
console.log(veg, "pop the final element")

console.log(veg[0]);
console.log(veg.length);

veg.unshift("brinjal");
console.log(veg, "unshift");

veg.shift();
console.log(veg, "shift ele")

console.log("slice: " + veg);
let removedEle = veg.slice(3);
console.log(removedEle);
console.log(veg);

// for(let i=0;i<5;i++){
//     console.log(veg[i]);
// }