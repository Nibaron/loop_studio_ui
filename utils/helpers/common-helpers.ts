function isValidEmail(email: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Valid range is 10-12 digits
  // Valid formats:
  // (123) 456-7890,
  // (123)456-7890,
  // 123-456-7890,
  // 123.456.7890,
  // 1234567890,
  // +31636363634 or
  // 075-63546725
  const validatePhone = (phone: any) => {
    return String(phone)
      .toLowerCase()
      .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  };