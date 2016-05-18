var Lightbox = {
   init : function () {
      this.createElements();
      this.addEventHandlers();
   },
   
   createElements : function () {
      // Create the required DOM
      this.overlay = document.body.appendChild(
         document.createElement('div')
      );
      this.overlay.className = 'overlay hidden';
      this.lightbox = document.body.appendChild(
         this.overlay.cloneNode()
      );
      this.lightbox.className = 'lightbox hidden';
      this.image = this.lightbox.appendChild( new Image() );
      this.close_btn = this.lightbox.appendChild(
         document.createElement('a')
      );
      this.close_btn.className = 'close';
      this.close_btn.innerHTML = 'x';
   },
   
   addEventHandlers : function () {
      this.overlay.addEventListener( 'click', this.close.bind(this) );
      this.close_btn.addEventListener( 'click', this.close.bind(this) );
   },
   
   close : function () {
      this.overlay.classList.add('hidden');
      this.lightbox.classList.add('hidden');
   },
   
   open : function ( src ) {
      this.image.src = src;
      this.overlay.classList.remove('hidden');
      this.lightbox.classList.remove('hidden');
   }
};