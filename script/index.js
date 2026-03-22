
//Task 1

let price = prompt ("Please enter £29.99");

//Task 2
parseFloat ("£29.99".slice(1));

price = parseFloat (price.slice(1));

console.log(price);

parseFloat("29.99");

console.log(typeof price);

//Task 3

let discount = 29.99 * 0.10;

console.log(discount);

let newPrice = price - discount;

console.log(newPrice);

//Task 4

console.log(`Your new price is ${newPrice}`);