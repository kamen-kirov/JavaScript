			//Kamen Kirov
//Part 2
// Implementation
function Storage() {

	this.data = {};

    this.get = function ( name ) {
        return this.data[ name ];
    };
    this.set = function ( name, value ) {
         this.data[ name ] = value;
    };
    this.getMultiple = function ( names ) {
        var temp = [];

		for( var i=0; i<names.length; i++) {
			temp.push( this.data[ names [ i ] ] );
		}
		return temp;
    };
    this.setMultiple = function ( pairs ) {
         for ( var key in pairs){
			this.data[ key ] = pairs[ key ];
		}
    };
}
     // Create two instances of `Storage`
//var storage          = new Storage();
//var another_storage  = new Storage();

var storage = new Storage();
storage.set( 'foo', 'bar' );     // we set a new key with value "bar"
storage.set( 'foo', 'foobar' );  // we overwrite the stored value of "foo"

storage.get( 'foo' );            // returns "foobar"     

storage.setMultiple({            // set 2 or more keys with values
foo1     : 'foobar1',
foo2     : 'foobar2'
});

storage.getMultiple([ 'foo1', 'foo2' ]);  // returns ['foobar1', 'foobar2']
 