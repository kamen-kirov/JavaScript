function typeOf( variable ){  //defines the function
	switch( true ){ //handles the different values of the function argument

	case typeof variable == "undefined" : //"variable" is undefined
		console.log( "The input value - " + variable + ", is undefined." );
		break;

	case variable.constructor == Object : //"variable" is an Object
		console.log( "The input value - " + variable + ", is an object." );
		break;	

	case variable.constructor == Array : //"variable" is an Array
		console.log( "The input value - " + variable + " is an array." );
		break;		

	case variable.constructor == Number : //"variable" is a Number
		console.log( "The input value - " + variable + ", is a number." );
		break;

	case typeof variable == "boolean" : //"variable" is a Boolean
		console.log( "The input value - " + variable + ", is a boolean." );
		break;

	case typeof variable == "string" : //"variable" is a String
		console.log( "The input value - " + variable + ", is a string." );
		break;
	}
	return typeof variable;
}

//ver 2.0
/*
function typeOf( variable ) {
   switch ( true ) {
      case variable === null            : return 'null';
      case Number.isNaN( variable )     : return 'NaN';
      case variable instanceof Boolean  : return 'boolean';
      case variable instanceof String   : return 'string';
      case variable instanceof Number   : return 'number';
      case variable instanceof Array    : return 'array';
      case variable instanceof Function : return 'function';
   }
   return typeof variable;
}
*/

// control function calls

var ret;
typeOf (ret); 
typeOf (4);
typeOf ("final");
typeOf ({
	name : "Kamen",
	title : "Mr",
	status : "Student"
});
typeOf ([3, 5, 6, 8, 10]);
typeOf (true);
