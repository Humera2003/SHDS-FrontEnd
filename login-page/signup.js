document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple form validation
    if (!username || !email || !password) {
      alert('Please fill out all fields');
      return;
    }
  
    // In a real application, you would send the data to the server here
    console.log({
      fullname: username,
      email: email,
      password: password
    });
  
    // Simulate a successful signup
    alert('Sign up successful! Redirecting to login page...');
    window.location.href = 'login.html';  // Redirect to login after signup
  });
  