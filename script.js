//your JS code here. If required.

const form = document.getElementById('myForm');
const checkbox = document.getElementById('termsCheckbox');
const submitBtn = document.getElementById('submitBtn');
const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');

function validateForm() {
  let allFilled = true;

  inputs.forEach(input => {
	if (!input.value.trim()) {
	  allFilled = false;
	}
  });

  submitBtn.disabled = !(checkbox.checked && allFilled);
}

// Listen for input and checkbox changes
inputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

checkbox.addEventListener('change', validateForm);