/*
The client app should be able to submit JSON data 
to the server, receive a CSV-formatted response and 
then display the result on the same page.
*/

var searchResultCallback = (error, resultData) => {
	if (error) {
		console.log('searchResultCallback error', error);
	}
	console.log('searchResultCallback resultData', resultData);

	// $('#csvResponse').html( JSON.stringify( data ) );
}

var getFormData = () => {
	var text = document.getElementById('textArea').value;
	// console.log('text', text);

	postForJson(text, searchResultCallback);
}

var postForJson = (json, callback) => {
	var jsonThisContext = json;
	$.ajax({
    url: 'http://localhost:3000/json',
    dataType: 'json',
    type: 'POST',
    // type: 'get',
    contentType: 'application/json',
    //data: JSON.stringify( jsonThisContext ),  
    data: JSON.stringify({ "firstName": "Joshie" }),
    processData: false,
    success: function( data ){
    		console.log('appjs/ajax/success data', data);
    		callback(null, data);
    },
    error: function( error ){
        console.log('appjs/ajax/error', error );
        callback(error, null);
    }
	});
};

// window.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'puppies', max: 10 }, this.searchResultCallback.bind(this));

var searchResultCallback = function(error, resultData) {
	if (error) {
		console.log('searchResultCallback error', error);
	}
	console.log('searchResultCallback resultData', resultData);
}