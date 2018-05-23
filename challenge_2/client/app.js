// const fs = require('fs');
/*
The client app should be able to submit JSON data 
to the server, receive a CSV-formatted response and 
then display the result on the same page.
*/

var searchResultCallback = function(error, resultData) {
	if (error) {
		console.log('searchResultCallback error', error);
	} else {
	   console.log('searchResultCallback resultData', resultData);
       console.log('updating page w. csv data');
       $("#csvResponse").replaceWith(resultData);
    }
}

var getFormData = () => {
	var text = document.getElementById('textArea').value;
	console.log('text on app', text);

	postForJson(text, searchResultCallback);
}

var postForJson = (json, callback) => {
	var jsonThisContext = json;
    // console.log('postForJson');
    // console.log(JSON.parse(JSON.stringify( jsonThisContext )));

	$.ajax({
    url: 'http://localhost:3000/json',
    dataType: 'json',
    type: 'POST',
    // type: 'get',
    contentType: 'application/json',
    data: JSON.parse(JSON.stringify( jsonThisContext )),
    // data: jsonThisContext,
    // data: JSON.stringify({ "firstName": "Joshie" }),
    processData: false,
    success: function( data ){
    		// console.log('appjs/ajax/success data', data);
            // console.log('data in app', data);
    		callback(null, data);
    },
    error: function( error ){
        // console.log('appjs/ajax/error', error );
        console.log('error in app', data);
        callback(error, null);
    }
	});
};
