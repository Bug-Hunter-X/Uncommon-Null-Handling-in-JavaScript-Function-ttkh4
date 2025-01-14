# Uncommon Null Handling in JavaScript Function

This repository demonstrates an uncommon null handling scenario in a JavaScript function. The function `foo` returns `null` if either of its arguments is `null`. This might be unexpected behavior, depending on the intended functionality.

## Bug
The `bug.js` file contains the original code with the unexpected null handling.  The function doesn't handle null gracefully and directly returns null. This might not be suitable in every situation. 

## Solution
The `bugSolution.js` file provides a possible solution. It checks for null arguments, then handles them appropriately or throws an error instead of returning null. 

This example highlights the importance of explicitly handling null or undefined values in JavaScript functions to avoid unexpected behavior and ensure robustness.  Choosing the right handling is dependent on the specific requirements of your application.