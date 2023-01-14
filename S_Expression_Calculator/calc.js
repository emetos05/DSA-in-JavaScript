const readline = require("readline");

class S_Expression {
  // S-Expression store for dynamic programming
  sexpStore = {};

  calculate(input) {
    while (input.indexOf(")") !== -1) {
      // Check if input already calculated
      if (input in this.sexpStore) {
        return this.sexpStore[input];
      }

      // Beginning with first sub expression i.e first ")"
      let rightIndex = input.indexOf(")");
      let leftIndex = input.lastIndexOf("(");

      let value = this.#evaluateCurrent(
        input.substring(leftIndex + 1, rightIndex)
      );

      // Only 1 layer, no nested expression
      if (leftIndex === 0) {
        return value;
      }

      // Nested layer, so get value and update input expression
      else {
        input =
          input.substring(0, leftIndex) +
          value +
          input.substring(rightIndex + 1);
      }
    }

    return parseInt(input);
  }

  // Evaluates single expression
  #evaluateCurrent(expression) {
    // Check if already calculated
    if (expression in this.sexpStore) {
      return this.sexpStore[expression];
    }

    let sexp = expression.split(" ");

    if (!isNaN(sexp)) {
      return sexp;
    }
    const operator = sexp[0];
    const operands = sexp.slice(1);

    let result = 0;

    if (operator === "add") {
      result = operands.map(Number).reduce((a, b) => a + b);
    } else if (operator === "multiply") {
      result = operands.map(Number).reduce((a, b) => a * b);
    } else {
      throw new Error(`Invalid operator "${operator}"`);
    }

    // Add to sexpStore object
    this.sexpStore[expression] = result;
    return result;
  }
}

module.exports = S_Expression;

// Command line input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an S-expression: ", (input) => {
  try {
    const result = new S_Expression().calculate(input);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
  rl.close();
});
