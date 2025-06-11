// Simple contact form handler for demo purposes
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
if (form && msg) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.textContent = "Thank you for contacting us! (Demo – no backend)";
    form.reset();
  });
}