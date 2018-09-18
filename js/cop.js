$("document").ready(function(){
  $("#postButton").click(function() {
    postPage();
  });

  if(JSON.parse(localStorage.getItem("pages")) == null) {
    localStorage.setItem("pages", "[]");
  }
});

function postPage() {
  var pageTitle = $("#pageTitle").val();
  var pageBody = $("#pageBody").val();

  let keyname = pageTitle.replace(" ", "");

  let obj = {"title":pageTitle, "body":pageBody};
  localStorage.setItem(keyname, JSON.stringify(obj));

  var keys = JSON.parse(localStorage.getItem("pages"));
  keys.push(keyname);
  localStorage.setItem("pages", JSON.stringify(keys));

  sessionStorage.setItem("pageNow", keyname);

  document.location.href = "blankPage.html";
}
