const display = document.getElementById("display");

function addDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteDisplay() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);

    result = Math.round(result * 1000) / 1000;

    display.value = result;

    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}