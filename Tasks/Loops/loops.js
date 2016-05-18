/*
//Task 1 - finding the average number in an array of integers
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ]; //defining the array
var sum = 0; //defines initial value of sum
var num_count = array.length; // the number of elements in the array

for (var i = 0; i<num_count; i++) {
	sum  += array[i]; //calculates the sum of the elements
}

var average = sum/num_count; //find the average number in the array
console.log("The average of the array is " + average ); //42.333333333333336
*/
//Task 1 ver 2 
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ]; //defining the array
 //defines initial value of sum
var num_count = array.length; // the number of elements in the array

for (var i = 0, sum = 0; i<num_count; sum += array[ i++ ]);

var average = sum/num_count; //find the average number in the array
console.log("The average of the array is " + average ); //42.333333333333336


//Task 2  - sorting the array in an ascending order; sort matheod may be used
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ]; //defining the array

var num_count = array.length; // the number of elements in the array
var temp; //variable used to store temporary values

for (var i = 0; i<num_count - 1; i++) { //bubble sort - needs two cycles
	for (var j = 0; j < ( num_count-i ) ; j++) {
		if( array[ j+1 ] < array [ j ]) { //tracks if two neighbouring elemnts of the array are sorted 
			temp = array [ j+1 ];
			array [ j+1 ] = array [ j ];
			array [ j ] = temp; //the two elements are sorted
		}
	}
}
console.log("The sorted array is: " + array ); //prints the elements of the sorted array


//Task 3 - Fibonaci numbers 
/*
var fibonaci = [ 0, 1 ]; //defines empty Fibonaci array

for (var i = fibonaci.length ;  ; i++) { //generating Fibanoci numbers
	fibonaci[ i ] = fibonaci[ i-2 ] + fibonaci[ i-1 ];
	if (fibonaci[ i ] >100) { //pops the last element of the array if greater than 100 and breaks the cycle
		fibonaci.pop();
		break;
	}
	if (fibonaci[ i ] % 3 == 0) { //check if the Fibonaci number can be devided to 3 without residue and prints the number
		console.log("Fibonaci number divided to 3 without residue: " + fibonaci[ i ]);
	}
};  
*/	

//Task 3 -  ver 2  
var fibonaci = [ 0, 1 ]; //defines empty Fibonaci array

while(true){

	var cur = fibonaci [ fibonaci.length -1 ] + fibonaci[ fibonaci.length -2 ];

	if (cur > 100 ){
		break;
	} 

	fibonaci.push(cur);

	if (fibonaci[ i ] % 3 == 0) { //check if the Fibonaci number can be devided to 3 without residue and prints the number
		console.log("Fibonaci number divided to 3 without residue: " + fibonaci[ i ]);
	}
}
	
//console.log("The whole Fibonaci array: " + fibonaci ); //control print of the whole Fibonaci array

