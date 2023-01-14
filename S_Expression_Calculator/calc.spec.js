const assert = require("assert");
const calc = require("./calc");

describe("SExpression", () => {
  describe("#calc()", () => {
    it("should return the input number when no function is called", () => {
      const sExpressionCalc = new calc.SExpression();

      assert.strictEqual(sExpressionCalc.calc("0"), 0);
      assert.strictEqual(sExpressionCalc.calc("1"), 1);
      assert.strictEqual(sExpressionCalc.calc("2"), 2);
      assert.strictEqual(sExpressionCalc.calc("3"), 3);
      assert.strictEqual(sExpressionCalc.calc("4"), 4);
      assert.strictEqual(sExpressionCalc.calc("5"), 5);
      assert.strictEqual(sExpressionCalc.calc("8"), 8);
      assert.strictEqual(sExpressionCalc.calc("16"), 16);
      assert.strictEqual(sExpressionCalc.calc("32"), 32);
      assert.strictEqual(sExpressionCalc.calc("64"), 64);
      assert.strictEqual(sExpressionCalc.calc("128"), 128);
      assert.strictEqual(sExpressionCalc.calc("256"), 256);

      for (let i = 0; i < 1000; i++) {
        assert.strictEqual(sExpressionCalc.calc(i.toString()), i);
      }

      for (let i = 0; i < 100; i++) {
        const val = Math.floor(Math.random() * 10001);
        assert.strictEqual(sExpressionCalc.calc(val.toString()), val);
      }
    });

    it("should perform addition correctly", () => {
      const sExpressionCalc = new calc.SExpression();

      assert.strictEqual(sExpressionCalc.calc("(add 1 1)"), 2);
      assert.strictEqual(sExpressionCalc.calc("(add 12 34)"), 46);
      assert.strictEqual(sExpressionCalc.calc("(add 321 456)"), 777);

      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          assert.strictEqual(sExpressionCalc.calc(`(add ${i} ${j})`), i + j);
        }
      }

      for (let i = 0; i < 100; i++) {
        const a = Math.floor(Math.random() * 10001);
        const b = Math.floor(Math.random() * 10001);
        assert.strictEqual(sExpressionCalc.calc(`(add ${a} ${b})`), a + b);
      }
    });

    it("should perform multiplication correctly", () => {
      const sExpressionCalc = new calc.SExpression();

      assert.strictEqual(sExpressionCalc.calc("(multiply 1 1)"), 1);
      assert.strictEqual(sExpressionCalc.calc("(multiply 12 4)"), 48);
      assert.strictEqual(sExpressionCalc.calc("(multiply 321 456)"), 146376);
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          assert.strictEqual(
            sExpressionCalc.calc(`(multiply ${i} ${j})`),
            i * j
          );
        }
      }

      for (let i = 0; i < 100; i++) {
        const a = Math.floor(Math.random() * 10001);
        const b = Math.floor(Math.random() * 10001);
        assert.strictEqual(sExpressionCalc.calc(`(multiply ${a} ${b})`), a * b);
      }
    });

    it("should handle nested function calls correctly", () => {
      const sExpressionCalc = new calc.SExpression();

      assert.strictEqual(sExpressionCalc.calc("(add (add 1 2) 5)"), 8);
      assert.strictEqual(sExpressionCalc.calc("(add (multiply 2 3) 7)"), 13);

      assert.strictEqual(sExpressionCalc.calc("(add 3 (add 1 2))"), 6);
      assert.strictEqual(sExpressionCalc.calc("(add 3 (multiply 1 2))"), 5);

      assert.strictEqual(sExpressionCalc.calc("(add (add 1 2) (add 3 4))"), 10);
      assert.strictEqual(
        sExpressionCalc.calc("(add (add 1 2) (multiply 1 2))"),
        5
      );
      assert.strictEqual(
        sExpressionCalc.calc("(add (multiply 5 3) (add 3 4))"),
        22
      );
      assert.strictEqual(
        sExpressionCalc.calc("(add (multiply 5 3) (multiply 3 4))"),
        27
      );

      assert.strictEqual(sExpressionCalc.calc("(multiply (add 1 2) 5)"), 15);
      assert.strictEqual(
        sExpressionCalc.calc("(multiply (multiply 2 3) 7)"),
        42
      );

      assert.strictEqual(sExpressionCalc.calc("(multiply 3 (add 1 2))"), 9);
      assert.strictEqual(
        sExpressionCalc.calc("(multiply 3 (multiply 1 2))"),
        6
      );

      assert.strictEqual(
        sExpressionCalc.calc("(multiply (add 1 2) (add 3 4))"),
        21
      );
      assert.strictEqual(
        sExpressionCalc.calc("(multiply (add 1 2) (multiply 1 2))"),
        6
      );
      assert.strictEqual(
        sExpressionCalc.calc("(multiply (multiply 5 3) (add 3 4))"),
        105
      );
      assert.strictEqual(
        sExpressionCalc.calc("(multiply (multiply 5 3) (multiply 3 4))"),
        180
      );

      // More complex combinations
      assert.strictEqual(
        sExpressionCalc.calc("(multiply (add (multiply 1 2) 3) (add 1 2))"),
        15
      );
      assert.strictEqual(
        sExpressionCalc.calc(
          "(multiply (add (multiply 1 2) (add 3 4)) (multiply (add 5 6) (multiply 7 8)))"
        ),
        5544
      );
    });
  });
});
