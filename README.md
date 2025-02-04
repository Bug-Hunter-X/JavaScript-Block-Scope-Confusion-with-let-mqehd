# JavaScript Block Scope Gotcha with `let`

This example demonstrates a common source of confusion in JavaScript related to block scope and the `let` keyword.  The code uses nested `let` declarations, leading to unexpected behavior for those unfamiliar with JavaScript's scoping rules.

The `bug.js` file contains the problematic code. The `bugSolution.js` file offers a solution that avoids the unexpected behavior and improves code clarity.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code (e.g., using Node.js).
4. Observe the output and note how the inner `let x` shadows the outer `let x`.
5. Compare with the clarified code in `bugSolution.js`. 