$("document").ready(function(){
  $("#postButton").click(function() {
    postPage();
  });

  $("#boldButton").click(function() {
    handleBold();
  });

  if(JSON.parse(localStorage.getItem("pages")) == null) {
    localStorage.setItem("pages", "[]");
  }
});

function postPage() {
  let pageTitle = $("#pageTitle").val();
  let pageBody = $("#pageBody").val();

  var keyname = pageTitle;

  let obj = {"title":pageTitle, "body":pageBody};
  localStorage.setItem(keyname, JSON.stringify(obj));

  var keys = JSON.parse(localStorage.getItem("pages"));
  keys.push(keyname);
  localStorage.setItem("pages", JSON.stringify(keys));

  sessionStorage.setItem("pageNow", keyname);

  document.location.href = "blankPage.html";
}

function handleBold() {
  if ($("#boldButton").hasClass("btn-light")) {
    console.log("Is Light");
    $("#boldButton").removeClass("btn-light");
    $("#boldButton").addClass("btn-dark");
  } else if ($("#boldButton").hasClass("btn-dark")) {
    $("#boldButton").removeClass("btn-dark");
    $("#boldButton").addClass("btn-light");
  }

}
