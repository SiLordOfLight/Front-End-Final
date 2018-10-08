$("document").ready(function(){
  loadPageContent()
});

function loadPageContent() {
  var thisKey = sessionStorage.getItem("pageNow");

  var thisPage = JSON.parse(localStorage.getItem(thisKey));

  let pageTitle = thisPage.title;
  let pageBody = thisPage.body;

  $("title").text(pageTitle);

  document.getElementById("pt").innerHTML = pageTitle;
  document.getElementById("pb").innerHTML = pageBody;
}
