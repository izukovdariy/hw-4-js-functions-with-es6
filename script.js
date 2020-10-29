// 1) `splitAndMerge`

const splitAndMerge = (str,sp) =>(str.split(" ").map((word) => word.split('').join(sp)).join(' '));

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

// 2) `convert`

const convert = (hash) => Object.entries(hash)

console.log(convert({ name: "Jeremy", age: 24, role: "Software Engineer" }));

// 3) `toCamelCase`

const toCamelCase = (str) => {
    let arrayString = str.split(/-+|_+/);
    arrayString.forEach((word, index) => {
        if (word !== "" && word[0] === word[0].toLowerCase() && index !== 0) {
            arrayString[index] = word[0].toUpperCase() + word.slice(1);
        }
    });
    return arrayString.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

// 4) `stringReverse`

const stringReverse = (str) => {
    let arrayString = str.split(" ");
    arrayString.forEach((word, index) => {
        arrayString[index] = word.split("").reverse().join("");
    });
    return arrayString.join(" ");
}

console.log(stringReverse("A fun little challenge! "));

// 5) `stringExpansion`

const stringExpansion = (str) => {
    let numeric = 1;
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            numeric = Number(str[i]);
        } else {
            for (let j = 0; j < numeric; j++) {
                newString += str[i];
            }
            numeric = 1;
        }
    }
    return newString;
}

console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));

// 6) `largest smallest`

const largest = (...args) => (Math.max(...args))

console.log(largest(2, 0.1, -5, 100, 3));

const smallest = (...args) => (Math.min(...args))

console.log(smallest(2, 0.1, -5, 100, 3));

// 7) `transform`

const transform  = (array) => (
    array.map((element) =>(
        () => ( element)
    ))
)

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

// 8) `sum`

const sum = (...args) => (args.reduce((total, amount) =>  total + amount, 0));

console.log(sum(1, 3, 5, 7));

// 9) `countDown`

const countDown = (number) => {
    let timerId = setInterval(() => {
        if (number < 0) clearInterval(timerId);
        else console.log(number--);
    }, 1000);
}

countDown(3);

