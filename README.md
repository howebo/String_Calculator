# String Calculator

This is a simple String Calculator implemented in TypeScript using Node.js. The calculator can parse a string of numbers, handle various delimiters, and compute their sum.

## Author
Project done by Priyansh Singh Chawda.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Input Examples](#input-examples)
- [Running Tests](#running-tests)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/howebo/String_Calculator.git
   cd string-calculator
2. **Install dependencies:** Make sure you have Node.js installed, then run:
   ```bash
   npm install

3. **Create a .gitignore file (if it doesn’t exist) and add node_modules/ to it to prevent tracking:**
   ```bash
   node_modules/

## Usage

1. **Start the server:**
   ```bash
   npx ts-node server.ts
2. **Open your web browser and navigate to:**
   ```bash
   http://localhost:3000
3. **Enter your input in the textarea and click the "Calculate" button.**

## Input Examples

   Input Examples:  Here are some examples of inputs you can enter in the UI input box:
  
   1. **Empty Input:**   
   Input: ""
   Expected Output: Result: 0
   
   2.**Single Number:**
   
   Input: "5"
   Expected Output: Result: 5
   
   3.**Two Numbers:**
   
   Input: "3,7"
   Expected Output: Result: 10
   Multiple Numbers with New Lines:
   
   Input: "1\n2,3"
   Expected Output: Result: 6
   
   4.**Custom Delimiter:**
   
   Input: "//;\n4;5;1"
   Expected Output: Result: 10
   
   5.**Negative Numbers:**
   
   Input: "1,-2,3"
   Expected Output: Error: negative numbers not allowed: -2

## Running Tests
1. **To run tests using Jest, you can execute:**
   ```bash
   npm test

## Technologies Used
Node.js
TypeScript
Express
Jest (for testing)

## License
This project is open-source and available under the MIT License.
```bash
 
### Instructions for Use

1. **Update the `https://github.com/howebo/String_Calculator.git`** in the Installation section with your actual GitHub repository URL.
2. Save this content into a file named `README.md` in your project root.

### Summary

This README file provides a comprehensive guide for users to understand how to set up and use your String Calculator project. If you have any further questions or need additional modifications, let me know!

