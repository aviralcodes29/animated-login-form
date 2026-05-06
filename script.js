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
        let isValid = true;

        clearErrors();

        // Email
        const emailVal = emailInput.value.trim();
        const emailErrEl = emailInput.closest(".field").querySelector(".error-msg");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailVal) {
            showError(emailInput, emailErrEl, "Email is required");
            isValid = false;
        } else if (!emailPattern.test(emailVal)) {
            showError(emailInput, emailErrEl, "Enter a valid email address");
            isValid = false;
        }

        // Password
        const passVal = passwordInput.value.trim();
        const passErrEl = passwordInput.closest(".field").querySelector(".error-msg");

        if (!passVal) {
            showError(passwordInput, passErrEl, "Password is required");
            isValid = false;
        } else if (passVal.length < 6) {
            showError(passwordInput, passErrEl, "At least 6 characters required");
            isValid = false;
        }

        if (!isValid) return;

        // Small success feedback
        form.classList.add("form-success");
        setTimeout(() => {
            alert("Login successful (demo only)");
            form.classList.remove("form-success");
            form.reset();
        }, 280);
    });

    // Clear error on typing
    fields.forEach((input) => {
        input.addEventListener("input", () => {
            const errorEl = input.closest(".field").querySelector(".error-msg");
            if (errorEl.textContent) {
                errorEl.textContent = "";
                errorEl.classList.remove("show");
                input.closest(".field-inner").style.borderColor = "";
            }
        });
    });

    function showError(inputEl, errorEl, message) {
        errorEl.textContent = message;
        errorEl.classList.add("show");
        inputEl.closest(".field-inner").style.borderColor = "#f97373";
    }

    function clearErrors() {
        document.querySelectorAll(".error-msg").forEach((el) => {
            el.textContent = "";
            el.classList.remove("show");
        });

        document.querySelectorAll(".field-inner").forEach((el) => {
            el.style.borderColor = "";
        });
    }
});