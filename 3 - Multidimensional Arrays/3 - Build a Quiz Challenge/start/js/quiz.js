// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ["How many sides does a square have?", "4"],
  ["How many sides does a triangle have?", "3"],
  ["How many sides does a hexagon have?", "6"],
];

// 2. Store the number of questions answered correctly

let correctAns = 0;
let correct = [];
let incorrect = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  const question = questions[i][0];
  const answer = questions[i][1];
  let response = prompt(question);

  if (response === answer) {
    correctAns++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAns} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correct)}</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;
