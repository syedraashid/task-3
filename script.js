 // Define the correct combination
 const combination = ['1', '2', '3', '4'];

 // Define the clue
 const clue = 'The first number is odd.';
 
 // Function to move to the next input field when a digit is entered
 function moveToNext(currentInput, nextInputId) {
   const maxLength = currentInput.getAttribute('maxlength');
   const currentLength = currentInput.value.length;
   if (currentLength === maxLength) {
     document.getElementById(nextInputId).focus();
   }
 }
 
 // Function to check the combination when the last digit is entered
 function checkCombination() {
   const digit1 = document.getElementById('digit1').value;
   const digit2 = document.getElementById('digit2').value;
   const digit3 = document.getElementById('digit3').value;
   const digit4 = document.getElementById('digit4').value;
   const enteredCombination = [digit1, digit2, digit3, digit4];
   if (enteredCombination.join('') === combination.join('')) {
     document.getElementById('result').textContent = 'Correct combination! The box is unlocked.';
     document.getElementById('result').style.color = 'green';
     document.getElementById('clue').textContent = '';
   } else {
     document.getElementById('result').textContent = 'Incorrect combination! Please try again.';
     document.getElementById('result').style.color = 'red';
     document.getElementById('clue').textContent = clue;
     if (digit4.length === 1) {
       document.getElementById('result').textContent += ' The correct combination was ' + combination.join('');
     }
   }
 }
 
 // Function to restart the game
 function restartGame() {
   document.getElementById('digit1').value = '';
   document.getElementById('digit2').value = '';
   document.getElementById('digit3').value = '';
   document.getElementById('digit4').value = '';
   document.getElementById('result').textContent = '';
   document.getElementById('result').style.color = 'inherit';
   document.getElementById('clue').textContent = clue;
   document.getElementById('digit1').focus();
 }
 
 // Set focus on the first input field when the page loads
 window.onload = function() {
   document.getElementById('digit1').focus();
 }
 