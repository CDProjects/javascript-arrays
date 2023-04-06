const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search)) {
    message = `Yes, we have <strong>${search}</strong>. It's ${inStock.indexOf(search)} on the list!`;
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;

}

document.querySelector('main').innerHTML = `<p>${message}</p>`;