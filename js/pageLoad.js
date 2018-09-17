$("document").ready(function(){
  $("head").remove();
  $("body").remove();

  $("html").append(getPageContent());
});

function getPageContent() {
  var thisKey = sessionStorage.getItem("pageNow");

  var thisPage = JSON.parse(localStorage.getItem(thisKey))

  let pageTitle = thisPage.title
  let pageBody = thisPage.body

  var htmlTemplate = `
  <head>
    <meta charset="utf-8">
    <title>$1</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/wikiPage.css">
  </head>
  <body>
    <h1>$2</h1><br/>
    <p>
      $3
    </p>
  </body>
  `;

  let ht2 = htmlTemplate.replace("$1", pageTitle);
  let ht3 = ht2.replace("$2", pageTitle);
  let ht4 = ht3.replace("$3", pageBody);

  return ht4
}
