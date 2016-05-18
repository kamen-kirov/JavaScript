//our list that needs to be printed
var list = [
	{ label : 'Item 1' },
	{
		label : 'Item 2',
		list :  {
			'1' : { label: 'Sub Item 2.1' },
			'2' : { label: 'Sub Item 2.2' },
			'3' : { label: 'Sub Item 2.3' },
		}
	},
	{
		label : 'Item 3',
		list :  [
			{
				label : 'Item 3.1',
				list :  {
					'1' : { label: 'Sub Item 3.1.1' },
					'2' : { label: 'Sub Item 3.1.2' }
				}
			},
			{ label : 'Sub Item 3.2' },
			{ label : 'Sub Item 3.3' }
		]
	}
];

//function that prints the list in the browser
function printlist ( list ) {
	var html = '';
	//'ol' or 'ul'
	var tag = list instanceof Array ? 'ol' : 'ul';

	html += '<' + tag + '>';

	/*assign the value of each property in our list to 
	the variable 'html'*/
	for ( var key in list){
		html += '<li>' + list[ key ].label;
		//calls recursively printList
		if( list[ key ].list ) {
			html += printlist( list[ key ].list );
			
		}
		html += '</li>';
	}

	html += '<' + tag + '/>';

	return html;
}

document.write( printlist( list ) );