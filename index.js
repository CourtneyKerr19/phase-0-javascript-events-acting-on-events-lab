// Your code here 
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 


  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left.replace('px', '')); // Get the current left position
  
    // Update the left position by adding 1px
    const newLeft = currentLeft + 1;
  
    // Check if the right edge of the dodger has reached the right edge of the game field
    if (newLeft + 40 <= 400) {
      dodger.style.left = `${newLeft}px`;
    }
  }