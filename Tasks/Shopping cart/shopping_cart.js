var shopping_cart = [
	{ product : "T-shirt", price : 10 },
	{ product : "Jeans", price : 69.9 },
	{ product : "Jacket", price : 119.99 }
];

/*first version

shopping_cart.forEach( function ( item ) {
 var spaces = new Array(65-(item.product.length + item.price.toFixed(2).length)).join(' '); //string containing blank spaces
 console.log( item.product + spaces + item.price.toFixed(2)); //printing the result
} );
*/

/* alternative way
shopping_cart.forEach( function ( item ) {
 item.price = item.price.toFixed( 2 );
 var char = 65 - item.product.length - item.price.length;

 console.log( item.product + new Array( char ).join(' ') + item.price);
} );
*/

//final edition
//defining the array
shopping_cart.forEach( function ( item ) {
	item.price = item.price.toFixed( 2 );
	var char = 65 - item.product.length - item.price.length;
	var spaces = new Array( char ).join(' '); //string containing blank spaces

 	console.log( item.product + spaces + item.price); //printing the result
} );