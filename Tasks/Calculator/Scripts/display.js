function Display ( placeholder ) {
   this.placeholder = placeholder;
   this.init();
}

Display.prototype = {
   init : function () {
      this.dom = document.createElement( 'input' );
      this.dom.setAttribute( 'disabled', 'disabled' );
      this.placeholder.appendChild( this.dom );
   },

   getValue : function () {
      return this.dom.value;
   },

   setValue : function ( value ) {
      this.dom.value = value;
   },

   isEmpty : function () {
      return this.dom.value == '';
   },

   clear : function () {
      this.dom.value = '';
   }
};