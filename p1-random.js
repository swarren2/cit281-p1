/*
    CIT 281 Project 1
    Name: Sydnee Warren
*/

// random string

// function to get random length from given min and max
function randomLength(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getRandomString(min, max) {
    // set empty array to push random letters into 
    let string = [];
    // to use only lowercase letter 
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    // Below comment was not inclusive range
    // let length = Math.floor(Math.random() * (max-min) + min);
    // Instead had to create seperate function to get inclusive range function called below
    let length = randomLength(min, max);
    //checking length expected
    console.log(length)
    //for loop to get random letters at the expected length
    for (let i = 0 ; i < length; i++ ) {
        string.push(letters.charAt(Math.floor(Math.random() * (max-min) + min)))
    }
    //checking that the length of array matches expected length
    console.log(string.length)
    // turning array into string
    return string.join("");
}

// output to console
console.log(getRandomString(5, 25));
