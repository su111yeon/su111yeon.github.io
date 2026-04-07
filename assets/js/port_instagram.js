window.onload = function () {
    const inputIdField = document.getElementById("loginID");
    const inputIdContainer = document.getElementById("loginInpID");

    const inputPwField = document.getElementById("loginPW");
    const inputPwContainer = document.getElementById("loginInpPW");
    const PWShowBtn = document.querySelector(".login__placeholder-btn");
    const loginSubmitBtn = document.getElementById("loginSubmitBtn");

    function handleInput(container, inputField, showButton) {
        if (inputField.value !== "") {
            container.classList.add("input-filled");
            if (showButton) showButton.style.display = "block";
        } else {
            container.classList.remove("input-filled");
            if (showButton) showButton.style.display = "none";
        }
    }

    function handleInput(container, inputField, showButton) {
        if (inputField.value !== "") {
            container.classList.add("input-filled");
            if (showButton) showButton.style.display = "block";
        } else {
            container.classList.remove("input-filled");
            if (showButton) showButton.style.display = "none";
        }
        updateSubmitButtonState();
    }

    function updateSubmitButtonState() {
        if (inputIdField.value !== "" && inputPwField.value.length >= 6) {
            loginSubmitBtn.disabled = false;
            loginSubmitBtn.classList.add("button-active");
        } else {
            loginSubmitBtn.disabled = true;
            loginSubmitBtn.classList.remove("button-active");
        }
    }

    inputIdField.addEventListener("input", function () {
        handleInput(inputIdContainer, inputIdField);
    });

    inputPwField.addEventListener("input", function () {
        handleInput(inputPwContainer, inputPwField, PWShowBtn);
    });

    let isPasswordVisible = false;

    PWShowBtn.addEventListener("click", function () {
        isPasswordVisible = !isPasswordVisible;
        inputPwField.type = isPasswordVisible ? "text" : "password";
        PWShowBtn.textContent = isPasswordVisible ? " 숨기기" : "비밀번호 표시";
    });
};
