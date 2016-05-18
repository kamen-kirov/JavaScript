//defining class Light
var Light = new Class({

	initialize : function ( color ) {
		var _color = color; 

		//getter of the private property
		this.getColor = function () {
		return _color;
		}
	},

	//function for turning on a specific color 
	turnOn		: function ( ) {  
		console.info( this.getColor() + " is turned ON!" ); 
	},

	//function for turning off a specific color 
	turnOff 	: function ( ) {  
		console.info( this.getColor() + " is turned OFF!" ); 
	}
	
});

//defining class Traffic
var Traffic = new Class({

	initialize : function ( type ) {
		this.light = {}; //defining an object to store the lights

		if( type == 'cars' ) { //traffic lights for cars
			this.light = {
			'red' : new Light( 'red' ),
			'green' : new Light( 'green' ),
			'yellow' : new Light( 'yellow' )
			};
		}

		if( type == 'people' ) { //traffic lights for cars
			this.light = {
			'red' : new Light( 'red' ),
			'green' : new Light( 'green' ),
			};
		}
	},

	//call tirnOn for green light and turnOff for the others
	//function for both cars and people
	pass			: function () { 
		this.light.green.turnOn();
		for( var i in this.light){
			if( i != 'green'){
				this.light[ i ].turnOff();
			}
		}

	},

	//call tirnOn for red light and turnOff for the others
	//function for both cars and people
	stop 	: function () {
		this.light.red.turnOn();
		for( var i in this.light){
			if( i != 'red'){
				this.light[ i ].turnOff();
			}
		}
	}
});


//Usage
var l1 = new Light( 'red' );
l1.turnOn();
l1.turnOff();

var car = new Traffic( 'cars' );
car.stop();
car.pass();

var person = new Traffic( 'people' );
person.stop();
person.pass();