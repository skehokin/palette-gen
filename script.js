var jc=0
var pc=0;
var c=0;
var dc=0;
var b;
var d;
var g;
var e;
var h;
var f;
var i;
var j;

function getRandomColor(){
	var letters="0123456789ABCDEF".split("");
	var Colour = "#";
	for (var o=0; o<6; o++) {
		Colour+=letters[Math.round(Math.random()*15)];

		}
	return Colour

	}
var x=getRandomColor();

function randomSquareJohn(){
	y=getRandomColor();
	document.getElementById("john").style.backgroundColor=y;
	document.getElementById("john").innerHTML=y;

	localStorage.setItem(jc, y);

	function currentJC(){ e=localStorage.getItem(jc); return e }
	f=(currentJC());
	document.getElementById("pal").innerHTML="<div style='height:20px; width:75px; float: left; background-color:"+ f +";'>"+f+"</div>"+document.getElementById("pal").innerHTML;

jc++
	}

function randomSquarePaul(){
	y=getRandomColor();
	document.getElementById("paul").style.backgroundColor=y;
	document.getElementById("paul").innerHTML=y;

	localStorage.setItem(pc, y);

	function currentPC(){ h=localStorage.getItem(pc); return h }
	g=(currentPC());
	document.getElementById("pal").innerHTML="<div style='height:20px; width:75px; float: left; background-color:"+ g +	";'>"+g+"</div>"+document.getElementById("pal").innerHTML;

	pc++
	}

function randomSquareDave(){
	y=getRandomColor();
	document.getElementById("dave").style.backgroundColor=y;
	document.getElementById("dave").innerHTML=y;

	localStorage.setItem(dc, y);

	function currentDC(){ j=localStorage.getItem(dc); return j }
	i=(currentDC());
	document.getElementById("pal").innerHTML="<div style='height:20px; width:75px; float: left; background-color:"+ i +";'>"+i+"</div>"+document.getElementById("pal").innerHTML;

dc++
	}





randomSquareJohn();
randomSquarePaul();
randomSquareDave();

document.getElementById("john").onclick=function(){randomSquareJohn();}
document.getElementById("dave").onclick=function(){randomSquareDave();}
document.getElementById("paul").onclick=function(){randomSquarePaul();}



document.getElementById("change").onclick=function(){
randomSquareJohn();
randomSquarePaul();
randomSquareDave();}

//set a value to start at 0, after which this code is run. if any of the solitary colors are clicked, change it to a different value, and change their own variables to a different variable. if 'change all" is clicked, put original value back to 0.

//I think we might be able to detect what the current



	document.getElementById("saver").onclick=function(){


		document.getElementById("spal").innerHTML="<div style='height:100px; width:100px; float: left; background-color:"+ i +";'>"+i+"</div>"+"<div style='height:100px; width:100px; float: left; background-color:"+ g +";'>"+g+"</div>"+"<div style='height:100px; width:100px; float: left; background-color:"+ f +";'>"+f+"</div>"+"<div style='height:5px; clear:both;'></div>"+document.getElementById("spal").innerHTML;
		}


