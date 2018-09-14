$("document").ready(function(){
  $("#postButton").click(function() {
    postPage();
  });

  if(JSON.parse(localStorage.getItem("pages")) == null) {
    localStorage.setItem("pages", "[\"buff\"]");
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

function getPageContent() {
  var thisKey = sessionStorage.getItem("pageNow");

  var thisPage = JSON.parse(localStorage.getItem(thisKey))

  let pageTitle = thisPage.title
  let pageBody = thisPage.body

  var htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>$1</title>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

      <script src="main.js"></script>
    </head>
    <body>
      <h1>$1</h1><br/>
      <p>
        $2
      </p>
    </body>
  </html>
  `;

  htmlTemplate.replace("$1", pageTitle);
  htmlTemplate.replace("$2", pageBody);

  return htmlTemplate
}
