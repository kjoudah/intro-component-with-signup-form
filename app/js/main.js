let form = document.getElementById("form");

let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_button");
let inputContainers = form.querySelectorAll(".input_container");

let errorStates = {
    first_name: function (element) {
        if (element.value.length === 0) {
            element.parentElement.classList.add("error");
        } else {
            element.parentElement.classList.remove("error");
        }
    },
    last_name: function (element) {
        if (element.value.length === 0) {
            element.parentElement.classList.add("error");
        } else {
            element.parentElement.classList.remove("error");
        }
    },
    email: function (element) {
        if (element.value.length === 0) {
            element.parentElement.classList.add("error");
            element.nextElementSibling.innerHtml = "Email must not be empty";
        } else if (!element.checkValidity()) {
            email.parentElement.classList.add("error");
            element.nextElementSibling.innerHTML =
                "Looks like this is not an email";
        } else {
            console.log("valid");
            element.parentElement.classList.remove("error");
        }
    },
    password: function (element) {
        if (element.value.length === 0) {
            element.parentElement.classList.add("error");
        } else {
            element.parentElement.classList.remove("error");
        }
    },
};

submitButton.addEventListener("click", () => {
    [firstName, lastName, email, password].forEach((element) => {
        errorStates[element.id](element);
    });
});
