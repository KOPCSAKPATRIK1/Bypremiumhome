document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
  });

  function sendEmail(retryCount = 0) {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };

    // Simple validation
    if (!validateInputs(parms)) {
      displayErrorMessage('Hibás adatok, kérjük ellenőrizze a mezőket!');
      return;
    }

    displayLoadingMessage('Üzenet küldése folyamatban...');
    
    emailjs.send("service_q4kqtx7", "template_q2qzuek", parms).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        displaySuccessMessage();
        resetFormFields();
      },
      (error) => {
        console.log('ERROR:', error);
        if (error.status === 412 && retryCount < 3) {
          console.log('Retrying...', retryCount + 1);
          setTimeout(() => sendEmail(retryCount + 1), 2000); // Adding a delay before retry
        } else {
          displayErrorMessage('Sikertelen küldés, kérjük próbálja újra később.');
        }
      }
    );
  }

  function validateInputs(parms) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9\-\+]{9,15}$/;
    return (
      parms.name.trim() !== '' &&
      emailPattern.test(parms.email) &&
      phonePattern.test(parms.phone) &&
      parms.message.trim() !== ''
    );
  }

  function displayLoadingMessage(message) {
    displayMessage(message, 'blue');
  }

  function displaySuccessMessage() {
    displayMessage('Üzenet elküldve!', 'green');
  }

  function displayErrorMessage(message) {
    displayMessage(message, 'red');
  }

  function displayMessage(message, color) {
    const formContainer = document.querySelector('.form-container');
    let messageElement = document.getElementById('form-message');

    if (!messageElement) {
      messageElement = document.createElement('p');
      messageElement.id = 'form-message';
      formContainer.appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.style.color = color;

    if (color !== 'blue') {
      setTimeout(() => {
        formContainer.removeChild(messageElement);
      }, 5000);
    }
  }

  function resetFormFields() {
    document.getElementById("contactForm").reset();
  }
});
