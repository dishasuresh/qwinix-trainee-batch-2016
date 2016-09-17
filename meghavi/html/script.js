
function myFunction() {
    document.getElementById('demo').innerHTML = "Paragraph changed.";
}
function newFunction() {
    document.getElementById('new').innerHTML = "Paragraph changed.";
    myFunction()
}
newFunction()