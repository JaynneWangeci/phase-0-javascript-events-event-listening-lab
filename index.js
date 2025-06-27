// index.js

function addingEventListener() {
  // Get the input element
  const input = document.getElementById('button');

  // Add click event listener
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

// Call the function to activate the event listener
addingEventListener();

