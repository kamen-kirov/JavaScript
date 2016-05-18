 var table_data = [
   [
      'Lorem Ipsum is simply dummy text',
      'Of the printing and typesetting industry.'
   ],
   [
      'Lorem Ipsum has been the industry\'s standard dummy text',
      'When an unknown printer took a galley of type'
   ],
   [
      'It has survived not only five centuries.',
      'But also the leap into electronic typesetting.'
   ],
   [
      'It was popularised in the 1960s with the release of Letraset sheets',
      'Desktop publishing software like Aldus PageMaker.'
   ],
   [
      'It is a long established fact that a reader will be distracted.',
      'By the readable content of a page.'
   ]
];

var table   = document.createElement( 'table' );
var tr_orig = document.createElement( 'tr' );
var td_orig = document.createElement( 'td' );

table.setAttribute( 'border', '1' );

table_data.forEach( function ( row ) {
   var tr = tr_orig.cloneNode();
   table.appendChild( tr );
   row.forEach( function ( cell ) {
      var td = td_orig.cloneNode();
      td.innerHTML = '<div>' + cell + '</div>'
      tr.appendChild( td );
   });
});

document.body.appendChild( table );
