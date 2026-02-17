# Day 22: JavaScript Operators & Expressions 🚀

Welcome to Day 22 of my JavaScript learning journey! Today, I practiced various types of operators and explored how expressions work in JS.

## 📝 What I Covered Today

### 1. Arithmetic Operators
Used for mathematical calculations.
- Addition (`+`), Subtraction (`-`), Multiplication (`*`), and Division (`/`).
- *Note:* Dividing by zero returns `Infinity` in JS.

### 2. Assignment Operators
Efficient ways to assign and update values.
- Understanding the difference between `+=` (Addition assignment) and other shorthand operators.

### 3. Comparison Operators
Used to compare two values, returning a boolean (`true`/`false`).
- Relational: `>`, `<`, `>=`, `<=`.
- Equality: 
  - `==` (Loose Equality): Checks only the value.
  - `===` (Strict Equality): Checks both value and data type (Best practice).

### 4. Ternary Operator (`? :`)
A shorthand for `if-else` statements.
- Syntax: `condition ? trueBlock : falseBlock`
- Practiced login validation and pass/fail logic.

### 5. Template Literals (Backticks `` ` ``)
Modern way to handle string concatenation using `${variable}` syntax for better readability compared to the traditional `+` operator.

## 💻 Code Snippet Example
```javascript
let username = "gk";
console.log(`You're successfully logged in ${username} welcome back`);