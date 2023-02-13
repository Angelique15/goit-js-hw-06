const input = document.getElementById("validation-input");
input.addEventListener("blur", function () {
    if (this.value.length === Number(this.dataset.length)) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
});

