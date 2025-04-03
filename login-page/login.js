// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Basic validation check (replace with your own validation logic)
//   if (username && password) {
//     window.location.href = 'dashboard.html'; // Redirect to the dashboard page
//   } else {
//     alert('Please enter valid credentials.');
//   }
// });

// function googleLogin() {
//   window.location.href = 'dashboard.html'; // Redirect after Google login (for demo purposes)
// }

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Dummy login validation (Replace this with actual authentication logic)
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email && password) { // Assume successful login
      localStorage.setItem("isLoggedIn", "true"); // Set login status
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
      alert("Invalid credentials!"); // Handle login failure
  }
});
