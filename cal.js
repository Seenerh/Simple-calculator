function addToResult(value) {
  document.getElementById('result').value += value;
}

function resetResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  const result = document.getElementById('result').value;
  const calculatedResult = eval(result);
  // eval function (which evaluates a JavaScript expression)

  document.getElementById('result').value = calculatedResult;
}