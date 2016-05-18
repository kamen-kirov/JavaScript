function Button ( placeholder, options ) {
   this.placeholder = placeholder;
   this.options     = options;
   this.createDOM();
}

Button.prototype = {
   createDOM : function () {
      this.dom = document.createElement( 'span' );
      this.dom.appendChild( document.createTextNode( this.options.value ) );
      this.placeholder.appendChild( this.dom );
   },
   
   getDOM : function () {
      return this.dom;
   },
   
   getType : function () {
      return this.options.type;
   },
   
   getValue : function () {
      return this.options.value;
   },
   
   onClick : function ( callback ) {
      this.dom.addEventListener( 'click', callback );
   }
};