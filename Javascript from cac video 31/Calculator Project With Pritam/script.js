var Input_Value = "";
class Stack {
  constructor(size) {
    this.array = new Array(size);
    this.topIndex = -1;
  }

  isEmpty() {
    return this.topIndex == -1;
  }

  push(value) {
    this.topIndex++;
    this.array[this.topIndex] = value;
  }

  pop() {
    if (!this.isEmpty()) {
      this.topIndex--;
    }
  }
}

function parenthesisMatching(str) {
  let stack = new Stack(str.length);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

function clr() {
  document.querySelector("#calculatorscreen").value = document
    .querySelector("#calculatorscreen")
    .value.slice(
      0,
      document.querySelector("#calculatorscreen").value.length - 1
    );
  Input_Value = document
    .querySelector("#calculatorscreen")
    .value.slice(
      0,
      document.querySelector("#calculatorscreen").value.length - 1
    );
}
function ClickHandel(Value) {
  if (Value === "*") {
    document.querySelector("#calculatorscreen").value += "x";
    Input_Value += Value;
  } else {
    document.querySelector("#calculatorscreen").value += Value;
    Input_Value += Value;
  }
}
function Clear() {
  document.querySelector("#calculatorscreen").value = "";
  Input_Value = "";
}

function Calculate() {
  try {
    let Calculated_Value = eval(Input_Value);
    document.querySelector("#calculatorscreen").value = Calculated_Value;
  } catch (error) {
    document.querySelector("#calculatorscreen").value =
      "Not A Valid Expression\n";
  }
}
