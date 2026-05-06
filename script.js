document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.querySelector(".toggle-password");
    const fields = [emailInput, passwordInput];

    // Toggle password visibility
    togglePasswordBtn.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";

        const icon = togglePasswordBtn.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });

    // Handle submit with basic validation
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearErrors();

        let valid = true;
        const emailVal = emailInput.value.trim();
        const passVal = passwordInput.value.trim();
        const emailErr = getErrorElement(emailInput);
        const passErr = getErrorElement(passwordInput);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailVal) {
            showError(emailInput, emailErr, "Email is required");
            valid = false;
        } else if (!emailPattern.test(emailVal)) {
            showError(emailInput, emailErr, "Enter a valid email address");
            valid = false;
        }

        if (!passVal) {
            showError(passwordInput, passErr, "Password is required");
            valid = false;
        } else if (passVal.length < 6) {
            showError(passwordInput, passErr, "At least 6 characters required");
            valid = false;
        }

        if (!valid) return;

        alert("Login successful (demo only)");
        form.reset();
    });

    // Clear error on typing
    fields.forEach((input) => {
        input.addEventListener("input", () => {
            const errorEl = getErrorElement(input);
            if (errorEl.textContent) {
                errorEl.textContent = "";
                errorEl.classList.remove("show");
                input.closest(".field-inner").style.borderColor = "";
            }
        });
    });

    /* Helpers */
    function getErrorElement(inputEl) {
        return inputEl.closest(".field").querySelector(".error-msg");
    }

    function showError(inputEl, errorEl, message) {
        errorEl.textContent = message;
        errorEl.classList.add("show");
        inputEl.closest(".field-inner").style.borderColor = "#f97373";
    }

    function clearErrors() {
        document.querySelectorAll(".error-msg").forEach(el => {
            el.textContent = "";
            el.classList.remove("show");
        });

        document.querySelectorAll(".field-inner").forEach(el => {
            el.style.borderColor = "";
        });
    }
});