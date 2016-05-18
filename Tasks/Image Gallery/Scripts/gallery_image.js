/**
 * @class GalleryImage
 * 
 * Creates new instance for every gallery image
 * 
 * @params {Object} properties The properties of the image
 * 
 */
function GalleryImage( properties ) {
   /** 
    * properties = {
    *    src      : '',
    *    caption  : ''
    * }
    */
   // Create the wrapper element
   this.wrapper = document.createElement('div');
   this.wrapper.className = 'image';
   // Create the inner structure
   this.wrapper.innerHTML = [
      '<a href="#">',
         '<img src="', properties.src, '">',
         '<span>', properties.caption, '</span>',
      '</a>'
   ].join('');
   // Make the click on the wrapper show large image in Lightbox
   this.wrapper.addEventListener( 'click', function ( e ) {
      e.preventDefault();
      Lightbox.open( this.src );
   }.bind( properties ) );
}

GalleryImage.prototype.getElement = function () {
   return this.wrapper;
}

