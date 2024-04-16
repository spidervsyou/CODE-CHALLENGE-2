let alphabets ='The Quick Brown Fox'//it declares a variable of the string

function swapCase(){ // the function is used to change the case of the sting
    let changedAlphabets =''; // it declares a variable of the changed alphabets
    for(let i= 0; i<alphabets.length; i++) { //it iterates over the string to using increments and identifiers 
        if([1,2,5,6,7,8,11,12,13,14,17,18].includes(i)){ //it shows the various indexes to be changed to upper case
             changedAlphabets +=alphabets[i].toUpperCase();// changes the specified index to uppercase
        }
        else{
            changedAlphabets +=alphabets[i].toLowerCase();//changes the remaining indexes to lower case
        }
    }
    return changedAlphabets;//it returns the changed alphabets
}
console.log(swapCase());