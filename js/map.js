// Loads a JSON file
function loadJSON(jsonUrl) {
	return $.ajax({
		url: jsonUrl,
		dataType: "json"
	});
}

// Loads a CSV file
function loadCSV(csvUrl) {
	return $.ajax({
		url: csvUrl,
		dataType: "text"
	});
}

$(document).ready(function(){
	// Makes the map
	L.mapbox.accessToken = "pk.eyJ1IjoiZGJlZXRzIiwiYSI6ImNpdTRsdXIzNDBqcXkyb3BsaWZ5dDF1bWsifQ.fKKx1Q6B4vX4HadQnqDvGw";
	var map = L.mapbox.map("map", "mapbox.streets")
		map.setView([35.30004, -106.5511369], 9);

});

