"use strict";

// 1. ARRAY
function outputArray(arr) {
  arr.forEach(function (element) {
    console.log(element.toString());
  });
}

var frameworks = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
outputArray(frameworks);
frameworks.reverse();
outputArray(frameworks);
frameworks.sort();
outputArray(frameworks); // 2. OBJECT

var car = {
  "brand": "Škoda",
  "model": "Favorit",
  "year": 1969
};
var brand = car.brand,
    model = car.model,
    year = car.year;
console.log("".concat(brand, " ").concat(model, ", ").concat(year)); // 3. GENERATOR

function generateRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

var rand = generateRandom(0, 555);
console.log("N\xE1hodn\xE9 \u010D\xEDslo je: ".concat(rand));