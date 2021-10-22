
var a;
function addName() {
//get value from input field and save as "a"
    var a = document.getElementById("name").value;
    window.alert(a)
//create localStorage key with value of a
    localStorage.setItem("uName", a);
//automatically take user to page two.html
    location.href = "two.html";
}
