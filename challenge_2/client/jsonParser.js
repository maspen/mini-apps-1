// const jQuery = require('jquery');
// jQuery.replace(/jQuery4u/g,'jQuery4u FTW!');
window.$ = window.jQuery = require('jquery');

// console.log(jQuery);

var jsonFilePath = '../samples/sales_report.json';

$.get(jsonFilePath, function(data) {
   jstonParser(data);
});

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// jQuery.get('file.txt', function(data) {
//    alert(data);
//    //process text file line by line
//    $('#div').html(data.replace('n',''));
// });

var jstonParser = (JSONData) => {
	if(null === JSONData || JSONData === '') {
		return;
	}

	var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

	console.log('arrData', arrData);

}