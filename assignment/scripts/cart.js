console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// global variable
let basket =[];
console.log('global variable basket:', basket);

//add item
function addItem(item){
    basket.push (item);
    return true;
}
console.log('Basket is', addItem);
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Basket is now', addItem);

//list items
function listItems(){
    for (let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}

console.log('Items in basket:', listItems);

// empty basket
function e


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
