var keys = JSON.parse(localStorage.getItem("pages"));

$(document).ready(function() {
	for(i = 0; i < keys.length; i++){
		document.getElementById("PageSummary").innerHTML = document.getElementById("PageSummary").innerHTML + "<li><span>" + keys[i] + "</span></li>";
	}
	$("#PageSummary span").click(function(event){
		var thisKey = event.target.innerHTML;
		sessionStorage.setItem("pageNow", thisKey);
		document.location.href = "blankPage.html";
	})
	
})

