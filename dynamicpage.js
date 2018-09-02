$(function() {

  if (Modernizr.history) {
console.log("1");
    // history is supported; do magical things

    // hijack the nav click event
    $("nav").delegate("a", "click", function() {
console.log("2");
      _href = $(this).attr("href");

      // change the url without a page refresh and add a history entry.
      history.pushState(null, null, _href);

      // load the content
      loadContent(_href); // fear not! we're going to build this function in the next code block

    });

  } else {

    // history is not supported; nothing fancy here

  }
});

function loadContent(href){
        console.log(_href);  
      };