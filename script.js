
var a;
function addName() {
//get value from input field and save as "a"
    var b = document.getElementById("name").value;
    window.alert(b)
//create localStorage key with value of a
    localStorage.setItem("uName", a);
//automatically take user to page two.html
    location.href = "two.html";
}
