document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (name === "" || email === "" || password === "") {
    error.textContent = "All fields are required!";
  } 
  else if (!email.includes("@")) {
    error.textContent = "Enter a valid email!";
  } 
  else if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters!";
  } 
  else {
    error.style.color = "green";
    error.textContent = "Form submitted successfully!";
  }
});