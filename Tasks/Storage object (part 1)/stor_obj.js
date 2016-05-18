			//Kamen Kirov
//Part 1
//My way
/*(function () {
	var storage = {};
	var key, value, key2, value2, key3, value3;
	window.set = function (k, v) {
		key = k;
		value = v;
	}
	window.get = function (key){
		return value;
	}
	window.setMultiple = function ( storage{ k1: "v1", k2: "v2"}){
		key2 = k1;
		key3 = k2;
		value2 = v1;
		value3 = v2;
	}
	window.getMultiple = function ( key2, key3 ){
		return value2, value3;
	}
}) ();

set("pie", "apple");
setMultiple(storage{car: "peugeot", sport: "biathlon" });
console.log (get("pie"));
console.log (getMultiple(["car", "sport"));
*/
//Part 1 - The right way
var storage = {
	data : {},

	get : function ( key ) {
		return this.data[ key ];
	},

	set : function ( key, value ) {
		this.data[ key ] = value;
	},

	getMultiple : function ( array ) {
		var temp = [];

		for( var i=0; i<array.length; i++) {
			temp.push( this.data[ array [ i ] ] );
		}

		return temp;
	},

	setMultiple : function( pairs ) {
		for ( var key in pairs){
			this.data[ key ] = pairs[ key ];
		}
	}
};

storage.set( 'foo', 'bar' );
storage.get( 'foo' );
storage.setMultiple( {     
    somekey      : 'somevalue',
    someotherkey : 'someothervalue'
} );
storage.getMultiple([     
   'somekey', 'foo'
]);
