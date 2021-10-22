var a = []
function addName() {
    var b = document.getElementById("name").value;
    a.push(b);
    document.getElementById("name").value = "";
    for (var i = 0; i < a.length; i++) {
  //create variable in the form of ordered list
    var newP = document.createElement("ol");
  //create varaible that is like "the home" for the element
    var newText = document.createTextNode(a[i]);
  //bind the element to its parent
    newP.appendChild(newText);
  //bind the appended pair to the body
    document.body.appendChild(newP);
  }
  window.alert(a)
}
