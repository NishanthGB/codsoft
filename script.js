document.addEventListener('DOMContentLoaded', function() {
  // Function to handle button click events
  function handleButtonClick(event) {
      const buttonId = event.target.id;
      if (buttonId === 'header-consult-button' || buttonId === 'hero-consult-button') {
          alert('Request a Consult button clicked!');
      } else if (buttonId === 'hero-read-more') {
          alert('Read More button clicked!');
      } else if (buttonId === 'about-read-more') {
          alert('Read More about us!');
      }
  }

  // Add event listeners to buttons
  document.getElementById('header-consult-button').addEventListener('click', handleButtonClick);
  document.getElementById('hero-consult-button').addEventListener('click', handleButtonClick);
  document.getElementById('hero-read-more').addEventListener('click', handleButtonClick);
  document.getElementById('about-read-more').addEventListener('click', handleButtonClick);
});
