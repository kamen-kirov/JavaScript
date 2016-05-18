/**
 * @class Gallery
 * 
 * Draws a new gallery
 * 
 * @requires GalleryImage
 * 
 * @param {Element} placeholder The DOM element in which to draw the images
 * @param {Array}   images      Array of objects (images)
 */

(function () {

// Create private scope
var private = {};

this.Gallery = function ( placeholder, images ) {
   private.placeholder     = placeholder;
   private.images          = images;
   private.gallery_images  = [];
   this.appendImages( images );
}

Gallery.prototype.getImages = function () {
   return private.gallery_images.slice();
}

Gallery.prototype.getPlaceholder = function () {
   return private.placeholder;
}

Gallery.prototype.appendImages = function ( images ) {
   // Loop `images` array and for each element create
   // new instance of GalleryImage.
   // Then append the DOM element to the `placeholder`.
   images.forEach( function ( image, index, images ) {
      this.gallery_images.push( new GalleryImage( image ) );
      this.placeholder.appendChild( this.gallery_images[ index ].getElement() );
   }, private);
}

})();