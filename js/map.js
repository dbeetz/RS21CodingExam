// Loads a JSON file
function loadJSON(jsonUrl) {
	return $.ajax({
		url: jsonUrl,
		dataType: "json"
	});
}

//draw the map key with D3
function drawKey() {
	//key width and height
	var width = 250;
	var height = 500;

	//get the key element from index
	var key = d3.select("#key");
	var svg = key.append("svg")
		.attr("width", width)
		.attr("height", height);

	//define the squares and colors for each household
	var marriedFamilyKey = svg.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", (width/10))
		.attr("height", (height/20))
		.style("fill", "rgb(24, 204, 37)");

	var maleHouseholderKey = svg.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", (width/10))
		.attr("height", (height/20))
		.style("fill", "rgb(48, 170, 178)");

	var femaleHouseholderKey = svg.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", (width/10))
		.attr("height", (height/20))
		.style("fill", "rgb(255,20,147)");

	//define squares labels
	var labelOffset = 5;
	var maleText = "Solo Male Homeowner";
	var femaleText = "Solo Female Homeowner";
	var marriedText = svg.append("text")
		.attr("x", (( width / 10) + labelOffset))
		.attr("y", 15)
		.text("Married Family Homeowners");
}

//use the Json to make calculations on the data
function parseCensusJson(census) {
	var totalHomes = "ACS_13_5YR_B11001_with_ann_HD02_VD01";
	var marriedHome = "ACS_13_5YR_B11001_with_ann_HD01_VD03";
	var singleMale = "ACS_13_5YR_B11001_with_ann_HD01_VD05";
	var singleFemale = "ACS_13_5YR_B11001_with_ann_HD01_VD06";
}

	//find the percent of total households that fall under these categories
	var avgHomes = [];
	censusJson.features.forEach(function(feature) {

		//find the total of homes that fall under these categories
		var homes = (Number(feature.properties[marriedHome])) + (Number(feature.propertiesp[singleMale])) + (Number(feature.properties[singleFemale]));

		//find the average number of homes in these categories
		if(homes > 0) {
			averageHomes.push(homes / Number(feature.properties[totalHomes]));
		}
	});

	var scale = d3.scaleLinear().


$(document).ready(function(){
	// Makes the map
	L.mapbox.accessToken = "pk.eyJ1IjoiZGJlZXRzIiwiYSI6ImNpdTRsdXIzNDBqcXkyb3BsaWZ5dDF1bWsifQ.fKKx1Q6B4vX4HadQnqDvGw";
	var map = L.mapbox.map('map', 'mapbox.streets');
		map.setView([35.08, -106.61], 11);

	overlays = L.layerGroup().addTo(map);

	$.when(loadJSON("data/BernalilloCensusBlocks_Joined.json")).done(function(json) {
		var censusJson = parseCensusJson(json);

		//census blocks
		var censusBlocks = L.mapbox.featureLayer().setGeoJSON(censusJson[0]).addTo(map);

		//draw the key
		drawKey();

	});
});

