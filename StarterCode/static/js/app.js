// from data.js
var tableData = data;
	var queryDate = 'tbd';
// Filter Button
	var button = d3.select("#filter-btn");
	button.on("click", function() {
		d3.event.preventDefault();
		var inputField = d3.select("#datetime");
		var queryDate = inputField.property('value');
		var FiltrData = tableData.filter(function (sighting) {
			return sighting.datetime === queryDate;
		});
	});
	
	var tbody = d3.select("tbody");	
	tbody.text('');

function tableDisplay() {	
	FiltrData.forEach(record => {
		var row = tbody.append("tr");
			Object.entries(record).forEach(([key, value]) => {
			row.append('td').text(value);
			});					
	});
});

console.log(FiltrData);
tableDisplay(FiltrData);





