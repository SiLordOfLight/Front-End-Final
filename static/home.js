var keys = JSON.parse(localStorage.getItem("pages"));

function randomButton(){

		var output = keys[Math.floor(Math.random()*keys.length)];
		sessionStorage.setItem("pageNow", output);
		document.location.href = "wikiPage";

}
