// 1. ARRAY

function outputArray(arr) {

    arr.forEach(function (element) {

        console.log(element.toString());
    });
}

const frameworks = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

outputArray(frameworks);

frameworks.reverse();

outputArray(frameworks);

frameworks.sort();

outputArray(frameworks);


// 2. OBJECT

const car = {
    "brand": "Škoda",
    "model": "Favorit",
    "year": 1969
}

const { brand, model, year } = car;

console.log(`${brand} ${model}, ${year}`);


// 3. GENERATOR

function generateRandom(min, max) {

    return min + Math.floor((Math.random() * (max - min + 1)));
}

const rand = generateRandom(0, 555);

console.log(`Náhodné číslo je: ${rand}`);