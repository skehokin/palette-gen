var jc=0
var g;
var f;
var i;


function getRandomColor(){
	var letters="0123456789ABCDEF".split("");
	var Colour = "#";
	for (var o=0; o<6; o++) {
		Colour+=letters[Math.round(Math.random()*15)];
		}
	return Colour
	}


function randomSquare(square_id){
	var	color = getRandomColor();
	var square = document.getElementById(square_id);
	console.log(color);
	square.style.backgroundColor = color;
	square.innerHTML = color;
	localStorage.setItem(square_id+jc, color);
	document.getElementById("pal").innerHTML="<div style='height:20px; width:75px; float: left; background-color:"+ color +";'>"+color+"</div>"+document.getElementById("pal").innerHTML;
	jc++
}



var changeAll =  function(idList){
	for (i=0; i<idList.length; i++){
		randomSquare(idList[i]);
	}
};

var setClick =  function(idList){
	for (i=0; i<idList.length; i++){
		var square_id = idList[i];
		var square = document.getElementById(square_id);
		square.onclick = function() {
			randomSquare(this.id);
			console.log("square named "+this.id+ " just got clicked")
		};
	}
};

var idList = ["john","dave","paul"];

changeAll(idList);

setClick(idList);


document.getElementById("change").onclick = function() {
	changeAll(idList);
}


//set a value to start at 0, after which this code is run. if any of the solitary colors are clicked, change it to a different value, and change their own variables to a different variable. if 'change all" is clicked, put original value back to 0.

//I think we might be able to detect what the current



	// document.getElementById("saver").onclick=function(){


	// 	document.getElementById("spal").innerHTML="<div style='height:100px; width:100px; float: left; background-color:"+ i +";'>"+i+"</div>"+"<div style='height:100px; width:100px; float: left; background-color:"+ g +";'>"+g+"</div>"+"<div style='height:100px; width:100px; float: left; background-color:"+ f +";'>"+f+"</div>"+"<div style='height:5px; clear:both;'></div>"+document.getElementById("spal").innerHTML;
	// 	}


