document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const clearButton = document.querySelector(".button-box img");

    checkboxes.forEach((checkbox, index) => {
        const isChecked = localStorage.getItem(`checkbox_${index}`) === "true";
        checkbox.checked = isChecked;
    });

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            localStorage.setItem(`checkbox_${index}`, checkbox.checked);
        });
    });

    clearButton.addEventListener("click", () => {
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = false;
            localStorage.removeItem(`checkbox_${index}`);
        });
    });
});