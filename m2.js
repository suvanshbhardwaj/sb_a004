function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Marks of " + name + "<br> Web Development= 13 <br> Computer Architechure= 12 <br> Python=7  </h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
