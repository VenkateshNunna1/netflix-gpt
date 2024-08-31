export const validation = {
  nameValidation: (name) => {
    let nameError = null;
    if (!name) {
      nameError = "Name is required.";
    }
    return nameError;
  },
  emailValidation: (email) => {
    let errors = null;
    // Check if email is empty
    if (!email) {
      errors = "Email is required.";
    }
    // Check if email format is valid
    else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors = "Please enter a valid email address.";
    }

    return errors;
  },
  passwordValidation: (password) => {
    let passwordError = null;
    if (!password) {
      passwordError = "Password is required.";
    } else if (password.length < 8) {
      passwordError = "Password must be at least 8 characters long.";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      passwordError =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }
    return passwordError;
  },
};
