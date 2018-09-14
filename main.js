let navHeader = `<nav class="navbar navbar-inverse">
<div class="container-fluid">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#indexNavbar">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<>
	</div>
	<div id="indexNavbar" class="collapse navbar-collapse">
		<ul class="nav navbar-nav">
		  <li id="index"><a href="index.html">Home</a></li>
		  <li id="createAPage"><a href="createAPage.html">Create a page</a></li>
		  <li id="pageSummary"><a href="pageSummary.html">Summary of pages</a></li>
		</ul>
	</div>
  </div>
</nav>
`

var obj = JSON.parse('[ "John", "30", "New York", "Ben"]')

$(document).ready(function() {
	$("body").prepend(navHeader);
	//$("#"+currentPage()).hide()
	$("#"+currentPage()).addClass("active");
	for(i = 0; i < obj.length; i++){
		document.getElementById("PageSummary").innerHTML = document.getElementById("PageSummary").innerHTML + "<li>" + obj[i] + "</li>";
	}
	
})

function currentPage() {
	let curPage = window.location.pathname;
	var patt = new RegExp("\/Front-End-Final\/(.+)\.html");
	return patt.exec(curPage)[1];
}

function p(x) {
	console.log(x);
}



/* $(document).ready(function(){
	
}) */

function randomButton(){
	    
		var output = obj[Math.floor(Math.random()*obj.length)];
		document.getElementById("demo").innerHTML = output;
}