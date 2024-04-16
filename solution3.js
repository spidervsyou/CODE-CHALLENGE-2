const solution =locateprime(2,30);//it declares the consant prime numbers
function locateprime(begin, end){//it return an array of numbers in between the stated values
    let prime =[]; // delcares a variable
    for(let i= begin; i < end; i++) {//i iterates over the array of the values stated
    if(theprime(i)){ //the identifier calls back the function of the array then genarates an array of prime numbers
        prime.push(i);//if the prime number is valid it is added to the new prime array
    }
    }
    return prime; //it returns the new prime array
}
function theprime(num){
    if (num<=1)return false; //if the number is below one return a false value since it is not a valid prime number
    for(let i = 2; i <=Math.sqrt(num); i++) {//it loops through the array of numbers to find the prime number by finding the square root
    if (num%i === 0){
        return false;//if the number iterated over using the loop has a squareroot it returns false since its not a valid prime number
    }
    }
    return true;//if the loops complete iterates through showing thatthe number iterated over is a prime number
}
console.log(solution)