function Calculator ( placeholder ) {
   this.placeholder = placeholder;
   this.placeholder.classList.add( 'calculator' );
   
   this.buttons = [
      [ 
         { value : 'AC', type : 'operation' },
         { value : '+/-', type : 'operation' },
         { value : '%', type : 'operation' },
         { value : '/', type : 'operation' },
      ],
      [
         { value : '7', type : 'number' },
         { value : '8', type : 'number' },
         { value : '9', type : 'number' },
         { value : '*', type : 'operation' },
      ],
      [
         { value : '4', type : 'number' },
         { value : '5', type : 'number' },
         { value : '6', type : 'number' },
         { value : '-', type : 'operation' },
      ],
      [
         { value : '1', type : 'number' },
         { value : '2', type : 'number' },
         { value : '3', type : 'number' },
         { value : '+', type : 'operation' },
      ],
      [
         { value : '0', type : 'number' },
         { value : '.', type : 'operation' },
         { value : '=', type : 'operation' }
      ]
   ];
   
   this.buttons_instances = {};
   this.initUI();
}

Calculator.prototype = {
   initUI : function () {
      this.display = new Display( this.placeholder );
      var table = document.createElement( 'table' );
      this.placeholder.appendChild( table );
      
      this.buttons.forEach( function ( row ) {
         var tr = document.createElement( 'tr' );
         table.appendChild( tr );
         
         row.forEach( function ( button ) {
            var td = document.createElement( 'td' );
            tr.appendChild( td );
            
            if ( button.value == '0' ) {
               td.setAttribute( 'colspan', 2 ); 
            }
            
            this.buttons_instances[ button.value ] = new Button( td, button );
            this.buttons_instances[ button.value ].onClick( this.buttonClick.bind( this, button ) );
         }, this );
      }, this );
      
      this.buttons_instances[ 'AC' ].getDOM().style.backgroundColor = 'orange';
      this.buttons_instances[ '=' ].getDOM().style.backgroundColor = 'green';
   },
   
   buttonClick : function ( button ) {
      // Disable '0' and an operation symbol as a first character
      if (
         this.display.isEmpty() &&
         (
            button.value == '0' ||
            button.type  == 'operation'
         )
      ) {
         return;
      }
      
      // Disable repeating of an operation symbols
      if ( button.type == 'operation' ) {
         if ( this.display.getValue().indexOf( button.value ) != -1 ) {
            return;
         }
      }
      
      switch ( button.value ) {
      case '=':
         this.display.setValue( eval( this.display.getValue() ) );
         this.is_evaluated = true;
         return;
      case 'AC':
         this.display.clear();
         return;
      case '%':
         this.display.setValue( eval( this.display.getValue() + '/ 100' ) );
         this.is_evaluated = true;
         return;
      case '+/-':
         this.display.setValue( eval( '0 - (' + this.display.getValue() + ')' ) );
         this.is_evaluated = true;
         return;
      }
      
      if ( this.is_evaluated ) {
         this.display.clear();
      }

      this.display.setValue( this.display.getValue() + button.value );
      this.is_evaluated = false;
   }
};