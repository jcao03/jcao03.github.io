var a = []
function addName() {
    var b = document.getElementById("name").value;
    a.push(b);
    document.getElementById("name").value = "";
    window.alert(a)
}
