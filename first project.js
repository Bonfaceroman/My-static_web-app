document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth Scrolling for Navigation Links ---
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor jump

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              // Get the header height to offset scroll position
              const headerHeight = document.querySelector('header').offsetHeight;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });

              // Optional: Close mobile menu if open
          }
      });
  });

  // --- Basic Form Validation ---
  const enrollForm = document.getElementById('enroll-form');
  const formMessage = document.getElementById('form-message');

  if (enrollForm) {
      enrollForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent actual form submission for this demo

          const nameInput = document.getElementById('name');
          const emailInput = document.getElementById('email');
          let isValid = true;
          let message = '';

          // Reset previous messages
          formMessage.textContent = '';
          formMessage.className = 'form-message'; // Reset classes
          nameInput.style.borderColor = '#ccc'; // Reset border color
          emailInput.style.borderColor = '#ccc'; // Reset border color

          // Very basic validation
          if (nameInput.value.trim() === '') {
              message = 'Please enter your full name.';
              nameInput.style.borderColor = 'red';
              isValid = false;
          } else if (emailInput.value.trim() === '') {
              message = 'Please enter your email address.';
              emailInput.style.borderColor = 'red';
              isValid = false;
          } else if (!validateEmail(emailInput.value.trim())) { // Basic email format check
              message = 'Please enter a valid email address.';
              emailInput.style.borderColor = 'red';
              isValid = false;
          }

          if (isValid) {
              // Simulate submission success
              formMessage.textContent = 'Thank you for enrolling! We will be in touch soon.';
              formMessage.classList.add('success');
              enrollForm.reset(); // Clear the form
               // In a real application, you would send the data to a server here
              console.log('Form submitted successfully:');
              console.log('Name:', nameInput.value.trim());
              console.log('Email:', emailInput.value.trim());

          } else {
              // Display error message
              formMessage.textContent = message;
              formMessage.classList.add('error');
          }
      });
  }

  // --- Helper function for basic email validation ---
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email format
      return re.test(String(email).toLowerCase());
  }

  // Add more interactive elements as needed...
  // e.g., animations on scroll, modal popups, etc.

});