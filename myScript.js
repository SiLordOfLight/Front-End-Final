var obj = JSON.parse('[ "John", "30", "New York"]')

/* $(document).ready(function(){
	
}) */

function randomButton(){
	    
		var output = obj[Math.floor(Math.random()*obj.length)];
		document.getElementById("demo").innerHTML = output;
}