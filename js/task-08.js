const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
        alert("All fields must be filled out.");
        return;
    }

    const data = {
        email: email,
        password: password
    };

    console.log(data);
    form.reset();
});
