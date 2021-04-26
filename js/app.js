//Assignment #1

let myNumber = 15;

if (typeof myNumber !== "number") {
    console.log('This is not a number');
} else if (myNumber % 3 == 0 && myNumber % 5 == 0) {
    console.log('GenBuzz');
} else if (myNumber % 3 == 0) {
    console.log('Gen');
} else if (myNumber % 5 == 0) {
    console.log('Buzz');
} else {
    console.log(myNumber)
}

//Assignment #2

let item = 'shoes';

switch(item) {
    case 'shoes':
        console.log('$50');
        break;
    case 'jeans':
        console.log('$25');
        break;
    case 'hat':
        console.log('$12');
        break;
    case 'socks':
        console.log('$2');
        break;
    default:
        console.log('No item found');
}

//Assignment #3

let randomNum = Math.floor(Math.random() * 50) + 51
console.log(randomNum);