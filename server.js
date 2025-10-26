<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Form</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #f0f4f8;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .form-wrapper {
      width: 100%;
      padding: 20px;
    }
    .container {
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      max-width: 500px;
      margin: 0 auto;
    }
    h2 {
      text-align: center;
      margin-bottom: 25px;
      color: #333;
      font-size: 24px;
    }
    .form-group {
      margin-bottom: 18px;
    }
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      color: #333;
    }
    input, textarea {
      width: 100%;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 14px;
      transition: all 0.3s;
    }
    input:focus, textarea:focus {
      border-color: #2575fc;
      box-shadow: 0 0 6px rgba(37,117,252,0.3);
      outline: none;
    }
    textarea {
      min-height: 60px;
      resize: none;
    }
    .gender-group {
      margin-bottom: 18px;
    }
    .gender-options {
      display: flex;
      gap: 20px;
      margin-top: 6px;
    }
    .gender-options label {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
    .gender-options input[type="radio"] {
      accent-color: #2575fc;
    }
    .terms-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .terms-group input[type="checkbox"] {
      accent-color: #2575fc;
      width: 18px;
      height: 18px;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #2575fc;
      border: none;
      color: #fff;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }
    button:hover {
      background-color: #145dcc;
      transform: scale(1.02);
    }
    .error-msg {
      color: red;
      font-size: 13px;
      margin-top: 3px;
      display: block;
    }
    input.error, select.error, textarea.error {
      border: 2px solid #ff4d4d;
      background-color: rgba(255, 0, 0, 0.05);
    }
    .error-border {
      border: 2px solid #ff4d4d !important;
      background-color: rgba(255, 0, 0, 0.05);
    }
    #toast {
      position: fixed;
      top: 20px;
      right: 20px;
      min-width: 250px;
      padding: 15px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 14px;
      display: none;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      opacity: 0;
      transition: opacity 0.5s, transform 0.5s;
    }
    #toast.show {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }
    #toast.success {
      background-color: #d4edda;
      color: green;
    }
    #toast.warning {
      background-color: #fff3cd;
      color: #856404;
    }
  </style>
</head>
<body>
  <div class="form-wrapper">
    <div class="container">
      <h2>Registration Form</h2>
      <form id="registerForm">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Re-enter password">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" id="phone" placeholder="10-digit phone number">
          <span class="error-msg"></span>
        </div>

        <div class="form-group gender-group">
          <label>Gender</label>
          <div class="gender-options">
            <label><input type="radio" name="gender" value="Male"> Male</label>
            <label><input type="radio" name="gender" value="Female"> Female</label>
            <label><input type="radio" name="gender" value="Other"> Other</label>
          </div>
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <textarea id="address" placeholder="Enter your address"></textarea>
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <input type="text" id="city" placeholder="Enter your city">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="state">State</label>
          <input type="text" id="state" placeholder="Enter your state">
          <span class="error-msg"></span>
        </div>

        <div class="form-group">
          <label for="zip">ZIP Code</label>
          <input type="text" id="zip" placeholder="Enter ZIP code">
          <span class="error-msg"></span>
        </div>

        <div class="form-group terms-group">
          <input type="checkbox" id="terms">
          <label for="terms">I agree to the terms & conditions</label>
          <span class="error-msg"></span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  </div>

  <div id="toast"></div>

  <script>
    const registerForm = document.getElementById('registerForm');
    const toast = document.getElementById('toast');

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
      document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error-border'));

      const name = value('name');
      const email = value('email');
      const password = value('password');
      const confirmPassword = value('confirmPassword');
      const phone = value('phone');
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const dob = value('dob');
      const address = value('address');
      const city = value('city');
      const state = value('state');
      const zip = value('zip');
      const terms = document.getElementById('terms').checked;

      let isValid = true;

      if (!name) showError('name', 'Full Name is required');
      if (!email) showError('email', 'Email is required');
      else if (!/\S+@\S+\.\S+/.test(email)) showError('email', 'Invalid email format');

      if (!password) showError('password', 'Password is required');
      else if (password.length < 6) showError('password', 'Password must be at least 6 characters');

      if (!confirmPassword) showError('confirmPassword', 'Confirm your password');
      else if (password !== confirmPassword) showError('confirmPassword', 'Passwords do not match');

      if (!phone) showError('phone', 'Phone number is required');
      else if (!/^\d{10}$/.test(phone)) showError('phone', 'Phone must be 10 digits');

      if (!gender) {
        document.querySelector('.gender-group .error-msg').textContent = 'Select gender';
        isValid = false;
      }

      if (!dob) showError('dob', 'Date of Birth is required');
      else if (new Date(dob) > new Date()) showError('dob', 'Date of Birth cannot be in the future');

      if (!address) showError('address', 'Address is required');
      if (!city) showError('city', 'City is required');
      if (!state) showError('state', 'State is required');

      if (!zip) showError('zip', 'ZIP code is required');
      else if (!/^\d{5,6}$/.test(zip)) showError('zip', 'ZIP must be 5 or 6 digits');

      if (!terms) {
        document.querySelector('.terms-group .error-msg').textContent = 'You must agree to the terms';
        isValid = false;
      }

      if (!isValid) {
        showToast('⚠️ Please correct highlighted fields.', 'warning');
        return;
      }

      // If everything is valid
      showToast('✅ Registration Successful!', 'success');
      registerForm.reset();

      function value(id) {
        return document.getElementById(id)?.value.trim();
      }
      function showError(id, message) {
        const input = document.getElementById(id);
        const error = input?.nextElementSibling;
        if (error) error.textContent = message;
        input?.classList.add('error-border');
        isValid = false;
      }
      function showToast(message, type = 'success') {
        toast.textContent = message;
        toast.className = `show ${type}`;
        setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
      }
    });
  </script>
</body>
</html>
