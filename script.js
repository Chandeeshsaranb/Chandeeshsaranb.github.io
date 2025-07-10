function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("message");

  if (user === "admin" && pass === "12345") {
    msg.style.color = "green";
    msg.textContent = "Login successful! Welcome, " + user;
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid username or password.";
  }
}
