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
        let emailRegex = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
        );
        if (element.value.length === 0) {
            element.nextElementSibling.innerHTML = "Email must not be empty";
            element.parentElement.classList.add("error");
        } else if (!emailRegex.test(element.value)) {
            email.parentElement.classList.add("error");
            element.nextElementSibling.innerHTML =
                "Looks like this is not an email";
        } else {
            element.nextElementSibling.innerHTML = "Email must not be empty";
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
