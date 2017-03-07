var cnt=0;
function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = <h2>"Namaste " + name + ""_/\_ </h2>;

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student" &cnt==0 ) {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
    cnt++;
   
  }
  else{
    var title = "welcome"
     document
        .querySelector("h1")
        .textContent = title;
  }
}
