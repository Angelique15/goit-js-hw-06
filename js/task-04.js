let counterValue = 0;
const valueElement = document.querySelector("#value");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if (action === "increment") {
            counterValue += 1;
        } else {
            counterValue -= 1;
        }
        valueElement.textContent = counterValue;
    });
});