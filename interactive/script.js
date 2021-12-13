var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Rock','Latin','Pop','R&B','EDM','Rap'];

//Data
var d = [
		  [
			{axis:"valence",value:0.54},
			{axis:"abs_loud",value:0.759},
			{axis:"instrumentaless",value:0.06},
			{axis:"energy",value:0.73},
			{axis:"danceability",value:0.52},
		  ],[
			{axis:"valence",value:0.61},
			{axis:"abs_loud",value:0.626},
			{axis:"instrumentaless",value:0.04},
			{axis:"energy",value:0.71},
			{axis:"danceability",value:0.71},
		  ],[
			{axis:"valence",value:0.50},
			{axis:"abs_loud",value:0.632},
			{axis:"instrumentaless",value:0.06},
			{axis:"energy",value:0.70},
			{axis:"danceability",value:0.64},
		  ],[
			{axis:"valence",value:0.53},
			{axis:"abs_loud",value:0.786},
			{axis:"instrumentaless",value:0.03},
			{axis:"energy",value:0.59},
			{axis:"danceability",value:0.67},
		  ],[
			{axis:"valence",value:0.40},
			{axis:"abs_loud",value:0.43},
			{axis:"instrumentaless",value:0.22},
			{axis:"energy",value:0.80},
			{axis:"danceability",value:0.66},
		  ],[
			{axis:"valence",value:0.51},
			{axis:"abs_loud",value:0.704},
			{axis:"instrumentaless",value:0.08},
			{axis:"energy",value:0.65},
			{axis:"danceability",value:0.72},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Genres ");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
