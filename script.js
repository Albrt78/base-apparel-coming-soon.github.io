const emailErrorMessage = document.querySelector(".hero__form__error");
const emailErrorSign = document.querySelector(".hero__form__error__image");
const emailInput = document.querySelector(".hero__form__input");
const submitButton = document.querySelector(".hero__form__button");
const emailRegEx =
    /^[a-zA-Z0-9.!#$%&*+{|}=`?~^_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailErrorMessage.style.visibility = "hidden";
emailErrorSign.style.visibility = "hidden";

function emailValidation() {
    if (emailInput.value.match(emailRegEx)) {
        emailErrorMessage.style.visibility = "hidden";
        emailErrorSign.style.visibility = "hidden";
    } else {
        emailErrorMessage.style.visibility = "visible";
        emailErrorSign.style.visibility = "visible";
    }
}

emailInput.addEventListener("input", () => {
    emailValidation();
});

submitButton.addEventListener("click", () => {
    if (emailInput.value == null) {
        emailErrorMessage.style.visibility = "visible";
        emailErrorSign.style.visibility = "visible";
    } else {
        emailValidation();
    }
});
