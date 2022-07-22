// Login details

const loginUser = document.getElementById("email");
const loginPasw = document.getElementById("password");
const loginButton = document.getElementById("sign");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginUser.email.value;
  const password = loginPasw.password.value;

  if (email === "user" && password === "web_dev") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
  }
});
