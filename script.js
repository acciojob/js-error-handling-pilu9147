//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = 'OutOfRangeError';
    this.message = 'Expression should only consist of integers and +-/* characters';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = 'InvalidExprError';
    this.message = 'Expression should not have an invalid combination of operators';
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/]/.test(expression)) {
      throw new SyntaxError('Expression should not start with an invalid operator');
    }

    if (/[\+\*\/\-]$/.test(expression)) {
      throw new SyntaxError('Expression should not end with an invalid operator');
    }

    // Perform the evaluation of the expression here
    // ...

    return 'Valid expression';
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new OutOfRangeError();
    }
  }
}

function evaluateExpressions(expressions) {
  for (let i = 0; i < expressions.length; i++) {
    try {
      const result = evalString(expressions[i]);
      console.log(`Expression ${i + 1}:`, result);
    } catch (error) {
      console.error(`Expression ${i + 1}:`, error.name, error.message);
    }
  }
}

// Example usage
const testExpressions = ['5 + 3 * 2', '10 / 0', '+3 - 2', '3 * -2', '++2', '5 /+ 2', '1+2-'];
evaluateExpressions(testExpressions);
