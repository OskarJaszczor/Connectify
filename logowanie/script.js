document.querySelector(".logInButton").addEventListener("click", () => {
  document.querySelector(".buttonContainer").innerHTML = "";
  document.querySelector(".buttonContainer").innerHTML =
    "<div class='loginContainer'>Login: <br><input type='text' class='inpLogin' name='inpLogin'><br>Hasło:<br> <input type='password' class='inpPassword' name='inpPassword'><br><button class='sendButton'>Zaloguj</button></div>";
});

document.querySelector(".signUpButton").addEventListener("click", () => {
  document.querySelector(".buttonContainer").innerHTML = "";
  document.querySelector(".buttonContainer").innerHTML =
    "<div class='registerContainer'>Login: <br><input type='text' class='inpLogin' name='inpLogin'><br>Hasło:<br> <input type='password' class='inpPassword' name='inpPassword'> <br>Potwierdź hasło:<br> <input type='password' class='inpPassword' name='inpPassword2'><button class='sendButton1'>Zarejestruj się</button></div>";
});

// dodawanie i sprawdzanie z userami w bazie

// logowanie
document.querySelector(".sendButton").addEventListener("click", () => {});

// rejestracja
document.querySelector(".sendButton1").addEventListener("click", () => {});
