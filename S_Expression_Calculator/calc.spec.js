const assert = require("assert");
const S_Expression = require("./calc");

describe("S_Expression", () => {
  describe("#calculate()", () => {
    it("test for single digit value", () => {
      const input = "5";
      const expected = 5;

      const result = new S_Expression().calculate(input);
      assert.strictEqual(result, expected);
    });

    it("test for multi digit value", () => {
      const input = "23";
      const expected = 23;

      const result = new S_Expression().calculate(input);
      assert.strictEqual(result, expected);
    });

    it("test for addition", () => {
      const input = "(add 2 3)";
      const expected = 5;

      const result = new S_Expression().calculate(input);
      assert.strictEqual(result, expected);
    });

    it("test for multiplication", () => {
      const input = "(multiply 2 10)";
      const expected = 20;

      const result = new S_Expression().calculate(input);
      assert.strictEqual(result, expected);
    });

    it("test for nested expression", () => {
      const input = "(multiply 2 (add (multiply 2 3) 8))";
      const expected = 28;

      const result = new S_Expression().calculate(input);
      assert.strictEqual(result, expected);
    });

    it("should throw an error for an invalid operator", () => {
      const input = "(invalid_operator 1 2 3)";

      assert.throws(
        () => new S_Expression().calculate(input),
        Error,
        'Invalid operator "invalid_operator"'
      );
    });
  });
});
