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
2. **Install dependencies:** Make sure you have Node.js installed, then run:  ```bash npm install
3. **Create a .gitignore file (if it doesn’t exist) and add node_modules/ to it to prevent tracking:**
4. **Start the server:**
5. **Open your web browser and navigate to:**
6. **Enter your input in the textarea and click the "Calculate" button.**
   Input Examples: 
      Here are some examples of inputs you can enter in the UI input box:
      
      Empty Input:
      
      Input: ""
      Expected Output: Result: 0
      Single Number:
      
      Input: "5"
      Expected Output: Result: 5
      Two Numbers:
      
      Input: "3,7"
      Expected Output: Result: 10
      Multiple Numbers with New Lines:
      
      Input: "1\n2,3"
      Expected Output: Result: 6
      Custom Delimiter:
      
      Input: "//;\n4;5;1"
      Expected Output: Result: 10
      Negative Numbers:
      
      Input: "1,-2,3"
      Expected Output: Error: negative numbers not allowed: -2
