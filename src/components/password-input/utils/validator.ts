const validator = (value: string) => {
  // have at least one uppercase letter
  const hasUpperCase = /[A-Z]/.test(value);

  // have at least one lowercase letter
  const hasLowerCase = /[a-z]/.test(value);

  // have at least one number
  const hasNumber = /\d/.test(value);

  // have at least one special character (!@#$%^&*.)
  const hasSpecial = /[!@#$%^&*.]/.test(value);

  // longer than 8 characters
  const isLongerThan8 = value.length > 8;

  return {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecial,
    isLongerThan8
  };
};

export default validator;
