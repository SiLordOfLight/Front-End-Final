let navHeader = `
<link rel="stylesheet" href="css/navbarStyle.css">

<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <!-- Brand -->
  <p class="navbar-brand" id="logo">DSW</p>

  <!-- Toggler/collapsible Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
			<li class="nav-item" id="index"><a class="nav-link" href="index.html">Home</a></li>
			<li class="nav-item" id="createAPage"><a class="nav-link" href="createAPage.html">Create a page</a></li>
			<li class="nav-item" id="pageSummary"><a class="nav-link" href="pageSummary.html">Summary of pages</a></li>
    </ul>
  </div>
</nav>
`


$(document).ready(function() {
	$("body").prepend(navHeader);
	//$("#"+currentPage()).hide()

	var navHeight = $(".navbar").height()+'px';
	p(navHeight);
	$("#logo").height(navHeight);
	$("#"+currentPage()).addClass("active");
})

function currentPage() {
	let curPage = window.location.pathname;
	var patt = new RegExp("\/Front-End-Final\/(.+)\.html");
	return patt.exec(curPage)[1];
}

function p(x) {
	console.log(x);
}
