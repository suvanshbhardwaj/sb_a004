function sayHello () {
  var name =
   document.getElementById("name").value;
  if(name=="suvansh")
   var message = "<h2>Marks of " + name + "<br> Web Development= 13 <br> Computer Architechure= 12 <br> Python=7 <br> Maths=11 </h2>";
  else if(name=="samridhi")
    var message = "<h2>Marks of " + name + "<br> Web Development= 12 <br> Computer Architechure= 2 <br> Python=8 <br> Maths=14 </h2>";
  else
      var message = "<h2>Marks of " + name + " not avalible </h2>";

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
