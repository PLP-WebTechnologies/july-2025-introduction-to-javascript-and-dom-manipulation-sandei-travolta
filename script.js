// --- Part 1: Variables, Data Types, Conditionals ---
let userName = "Student";
let score = 85;
let passed = score >= 60;

if (passed) {
  console.log(`${userName} passed!`);
  document.getElementById('output').textContent = `${userName} passed!`;
} else {
  console.log(`${userName} did not pass.`);
  document.getElementById('output').textContent = `${userName} did not pass.`;
}

// --- Part 2: Functions ---
function calculateTotal(a, b) {
  // Returns the sum of two numbers
  return a + b;
}

function formatGreeting(name) {
  // Returns a formatted greeting string
  return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(formatGreeting(userName));

// --- Part 3: Loops ---
const items = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < items.length; i++) {
  // Add each item to the list in the DOM
  let li = document.createElement('li');
  li.textContent = items[i];
  document.getElementById('list').appendChild(li);
}

// Example of a countdown using a while loop
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// --- Part 4: DOM Interactions ---
// 1. Change text on button click
document.getElementById('toggleBtn').addEventListener('click', function() {
  let output = document.getElementById('output');
  if (output.style.display === 'none' || output.style.display === '') {
    output.style.display = 'block';
  } else {
    output.style.display = 'none';
  }
});

// 2. Update content on form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let name = formData.get('name');
  document.getElementById('output').textContent = `Form submitted! Hello, ${name}.`;

  // Clear the form
  event.target.reset();
});

// 3. Real-time search filter
document.getElementById('search').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let items = document.querySelectorAll('#list li');
  items.forEach(function(item) {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
});

// --- Part 5: Events ---
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button was clicked!');
});

document.getElementById('myInput').addEventListener('focus', function() {
  this.style.backgroundColor = 'yellow';
});

document.getElementById('myInput').addEventListener('blur', function() {
  this.style.backgroundColor = '';
});

// --- Part 6: Error Handling ---
function safeDivide(a, b) {
  try {
    if (b === 0) throw 'Division by zero is not allowed.';
    return a / b;
  } catch (error) {
    console.error(error);
    return null;
  }
}

let result = safeDivide(10, 0);
if (result !== null) {
  console.log(`Result: ${result}`);
} else {
  console.log('An error occurred during division.');
}

// --- Part 7: Asynchronous JavaScript ---
document.getElementById('fetchData').addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById('output').textContent = `Fetched ${data.length} posts.`;
    })
    .catch(error => console.error('Error fetching data:', error));
});

// --- Part 8: Local Storage ---
document.getElementById('saveBtn').addEventListener('click', function() {
  let userInput = document.getElementById('userInput').value;
  localStorage.setItem('userData', userInput);
  document.getElementById('output').textContent = 'Data saved to local storage.';
});

document.getElementById('loadBtn').addEventListener('click', function() {
  let storedData = localStorage.getItem('userData');
  if (storedData) {
    document.getElementById('output').textContent = `Loaded from local storage: ${storedData}`;
  } else {
    document.getElementById('output').textContent = 'No data found in local storage.';
  }
});

document.getElementById('clearBtn').addEventListener('click', function() {
  localStorage.removeItem('userData');
  document.getElementById('output').textContent = 'Data removed from local storage.';
});