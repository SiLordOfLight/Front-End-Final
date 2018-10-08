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

  $("#pageBody").keypress(function(event){
    let pressed = event.which;

    p(pressed);

    if (pressed == 13) {



      // $("pageBody div").append("</br>");
      // p($("pageBody div").html());
      // let cnt = $("pageBody div").html();
      // p(cnt);
      // $("pageBody div").replaceWith(cnt);
      // p($("pageBody").html())

      /*
      let ht = $("#pageBody").html();
      let ht2 = ht.replace(/\<\/?div\>/g,"");
      $("#pageBody").html(ht2);
      p(ht);
      p(ht2);
      */
    }
  });
});

function postPage() {
  let pageTitle = $("#pageTitle").val();
  let pageBody = $("#pageBody").html().replace(/##b##/g,"</b>").replace(/#b#/g,"<b>").replace(/##i##/g,"</i>").replace(/#i#/g,"<i>");

  var keyname = pageTitle;

  let obj = {"title":pageTitle, "body":pageBody};
  localStorage.setItem(keyname, JSON.stringify(obj));

  var keys = JSON.parse(localStorage.getItem("pages"));
  keys.push(keyname);
  localStorage.setItem("pages", JSON.stringify(keys));

  sessionStorage.setItem("pageNow", keyname);

  document.location.href = "wikiPage";
}

function handleBold() {
  if ($("#boldButton").hasClass("btn-light")) {
    $("#boldButton").removeClass("btn-light");
    $("#boldButton").addClass("btn-dark");

    let newPB = $("#pageBody").html() + "#b#";
    console.log(newPB);
    document.getElementById("pageBody").innerHTML = newPB;
  } else if ($("#boldButton").hasClass("btn-dark")) {
    $("#boldButton").removeClass("btn-dark");
    $("#boldButton").addClass("btn-light");

    let newPB = $("#pageBody").html() + "##b##";
    console.log(newPB);
    document.getElementById("pageBody").innerHTML = newPB;
  }
}

function handleItalic() {
  if ($("#italicButton").hasClass("btn-light")) {
    $("#italicButton").removeClass("btn-light");
    $("#italicButton").addClass("btn-dark");

    let newPB = $("#pageBody").html() + "#i#";
    console.log(newPB);
    document.getElementById("pageBody").innerHTML = newPB;
  } else if ($("#italicButton").hasClass("btn-dark")) {
    $("#italicButton").removeClass("btn-dark");
    $("#italicButton").addClass("btn-light");

    let newPB = $("#pageBody").html() + "##i##";
    console.log(newPB);
    document.getElementById("pageBody").innerHTML = newPB;
  }
}
