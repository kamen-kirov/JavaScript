 //the list to be printed
 var data = [
         { label : 'Ordered Item 1' },
         {
            label : 'Ordered Item 2',
            list  : [
               { label : 'Ordered Sub Item 2.1' },
               { label : 'Ordered Sub Item 2.2' },
               { label : 'Ordered Sub Item 2.3' }
            ]
         },
         {
            label : 'Ordered Item 3',
            list  : {
               1 : {
                  label : 'Unordered Sub Item 3.1',
                  list  : {
                     1: { label : 'Unordered Sub Item 3.1.1' },
                     2: { label : 'Unordered Sub Item 3.1.2' }
                  }
               },
               2 : { label : 'Sub Item 3.2' },
               3 : {
                  label : 'Sub Item 3.3',
                  list  : [
                     { label : 'Ordered Sub Item 3.3.1' },
                     { label : 'Ordered Sub Item 3.3.2' },
                     { label : 'Ordered Sub Item 3.3.3' }
                  ]
               }
            }
         }
      ];
/*
      Version 1
//function for printing the list above
function printlist ( list, font_size ) {
   var html = ''; //stores the html as string
   //'ol' or 'ul'
   var tag = list instanceof Array ? 'ol' : 'ul';
   //sets the inition font size of the list
   var font_size = font_size || 16; 

   html += '<' + tag + ' Style="font-size: ' + font_size + 'px">';

   //stores the value of each label in the 'html' variable
   for ( var key in list){
      html += '<li>' + list[ key ].label;
      if( list[ key ].list ) {
         //checks if 'font_size' is less tnan 10 (it shouldn't be)
         var new_font_size = font_size - 2 < 10 ? 10 : font_size -2;
         html += printlist( list[ key ].list, new_font_size );
         
      }
      html += '</li>';
   }

   html += '<' + tag + '/>';

   return html;
}
//prints the list
document.write( printlist( data ) );
*/

/*
         Version 2 - similar to version but with the usage of arrays - better performance

function printList( list, font_size ) {
   var html      = [];
   var tag       = list instanceof Array ? 'ol' : 'ul';
   var font_size = font_size || 16;
   
   
   html.push( '<' + tag + ' style="font-size: ' + font_size + 'px">' );
   for ( var key in list ) {
      html.push( '<li>' + list[ key ].label );
      if ( list[ key ].list ) {
         var new_font_size = font_size - 2 < 10 ? 10 : font_size - 2;
         html.push( printList( list[ key ].list, new_font_size ) );
      }
      html.push ('</li>' );
   }
   html.push( '</' + tag + '>' );

   return html.join( '' );
}

document.write( printList( data ) );
*/

// Final version - best performance (using cloneNode() method)

//create the elements that need to be cloned and stored in a div
var div = document.getElementById( 'result' );
var ul  = document.createElement( 'ul' );
var ol  = document.createElement( 'ol' );
var li  = document.createElement( 'li' );

function printList( list, font_size ) {
   var element   = list instanceof Array ? ol.cloneNode() : ul.cloneNode();
   var font_size = font_size || 16;
   
   element.style[ 'fontSize' ] = font_size + 'px';
   for ( var key in list ) {
      var current_li = li.cloneNode();
      current_li.appendChild( document.createTextNode( list[ key ].label ) );
      element.appendChild( current_li );
      
      if ( list[ key ].list ) {
         var new_font_size = font_size - 2 < 10 ? 10 : font_size - 2;
         current_li.appendChild(
            printList( list[ key ].list, new_font_size )
         );
      }
   }
   
   return element;
}

result.appendChild( printList( data ) );