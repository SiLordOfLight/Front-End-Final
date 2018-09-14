$("document").ready(function(){
  $("head").remove();
  $("body").remove();

  $("document").append(getPageContent(pageTitle, pageBody));
});
