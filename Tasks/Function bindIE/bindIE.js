          //Kamen Kirov 
             
Function.prototype.bindIE = function (obj) {
	if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError('Function.prototype.bindIE - what is trying to be bound is not callable');
  }

  var aArgs   = Array.prototype.slice.call( arguments, 1 ),
      fToBind = this,
      fNOP    = function() {},
      fBound  = function() {
        return fToBind.apply( this instanceof fNOP && obj
                ? this
                : obj,
                aArgs.concat( Array.prototype.slice.call( arguments ) ) );
      };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};

/* Second version 

Function.prototype.bindIE = function (obj) {
  var fn = this;
  var args = Array.prototupe.slice.call( arguments );
  obj = args.shift();

  return function(){
    return fn.apply(
      obj,
      args.concat( Array.prototype.slice.call( arguments ) )
    );
  }

*/
function sum() {
	var sum = 0;
	var args = [].slice.call( arguments );

	args.forEach( function ( arg )  {
		sum += arg;
	});

	return sum;
}

//usage 
var sum_bound = sum.bindIE( null, 4, 5); //won't work if bindIE() is in an "if" statement
console.log( sum_bound() );	//9