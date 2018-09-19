$("document").ready(function(){
  $("#postButton").click(function() {
    postPage();
  });

  $("#boldButton").click(function() {
    handleBold();
  });

  $("#italicButton").click(function() {
    handleItalic();
  });

  if(JSON.parse(localStorage.getItem("pages")) == null) {
    localStorage.setItem("pages", "[]");
  }
});

function postPage() {
  let pageTitle = $("#pageTitle").val();
  let pageBody = $("#pageBody").text();

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
    $("#boldButton").removeClass("btn-light");
    $("#boldButton").addClass("btn-dark");

    let newPB = $("#pageBody").text() + "<b>";
    console.log(newPB);
    document.getElementById("pageBody").innerHTML = newPB;
  } else if ($("#boldButton").hasClass("btn-dark")) {
    $("#boldButton").removeClass("btn-dark");
    $("#boldButton").addClass("btn-light");

    let newPB = $("#pageBody").html() + "</b>";
    $("#pageBody").html(newPB);
  }
}

function handleItalic() {
  if ($("#italicButton").hasClass("btn-light")) {
    $("#italicButton").removeClass("btn-light");
    $("#italicButton").addClass("btn-dark");

    $("#pageBody").append("<i>");
  } else if ($("#italicButton").hasClass("btn-dark")) {
    $("#italicButton").removeClass("btn-dark");
    $("#italicButton").addClass("btn-light");

    $("#pageBody").append("</i>");
  }
}
