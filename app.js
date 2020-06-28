//Calculator Logic

function getNumber(num) {
  var input = document.getElementById("input");
  input.value += num;
}

function clearInput() {
  var input = document.getElementById("input");
  input.value = "";
}

function getInput() {
  var input = document.getElementById("input");
  input.value = eval(input.value);
}
