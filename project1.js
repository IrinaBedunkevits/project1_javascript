// Add new things
  function addNewThing() {
  var li = document.createElement("li");
  var Iwish = document.getElementById("Iwish").value;
  var text = document.createTextNode(Iwish);
  li.appendChild(text);
  if (Iwish.length > 0 && Iwish.length < 3) {
    alert("Too short input!");
    return false;
  } else {
    document.getElementById("myThings").appendChild(li);
  }
  document.getElementById("Iwish").value = "";
}
// Deleting added things
  function deleteThing() {
  var list = document.getElementById("myThings");
  list.removeChild(list.childNodes[0]);
}
// P element shows when click send button
var x = document.getElementById("message");
x.addEventListener("click", sended);
function sended() {
  document.getElementById("thankyou").innerHTML =
        "Thank you for sending message!";
}
// Headen element shows up onchange
document.getElementById('hide');
var x = document.getElementById('hide');
x.style = "display: none";

function commentBox() {
document.getElementById('hide');
var x = document.getElementById('hide');
x.style = "display: block";
}
// Pulldown
function iChooseFunction() {
var x = document.getElementById("mySelect").value;
document.getElementById("myThings").innerHTML += "I want to " + x + "<br>";
}
