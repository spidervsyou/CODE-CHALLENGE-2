function generateNumbersBetween(num1, num2) {//a function that genetares the values in between num1 and num2
    let numbers= [];// declare a variable 

    for (let i= num1; i<= num2; i++) {//it iterates over the array using identifiers and incrementor
        numbers.push(i);//it pushes the number in between the stated values to the array
    }
    return numbers;// it returns the new array of numbers created
}
console.log(generateNumbersBetween(4, 7))
console.log(generateNumbersBetween(-4, 7))