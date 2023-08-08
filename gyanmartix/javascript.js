const form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    if (!checks()) {
        e.preventDefault();
    }
});

function checks() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("default1");

    if (isValidCredentials(email, password)) {
        window.location.assign("dashboardpage.html");
        error.textContent = "";
        return false;
    } else {
        error.textContent = "Invalid credentials";
        return false;
    }
}

function isValidCredentials(email, password) {
    return email === "hariharran17@gmail.com" && password === "hari@7936";
}
