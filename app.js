const dataOutput = document.querySelector(".output");
let getOutputValue = "";

function getNumber(value) {
  if (value === "." && getOutputValue.includes(".")) return;
  getOutputValue = getOutputValue + value;
  dataOutput.innerHTML = getOutputValue;
}

function getEqual() {
  getOutputValue = eval(getOutputValue);
  dataOutput.innerHTML = getOutputValue;
}

function getDelete() {
  getOutputValue = getOutputValue.slice(0, -1);
  dataOutput.innerHTML = getOutputValue;
}

function getAllClear() {
  getOutputValue = "";
  dataOutput.innerHTML = getOutputValue;
}