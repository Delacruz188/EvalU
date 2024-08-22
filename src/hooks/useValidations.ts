const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/;

function containsMaliciousPatterns(input) {
  const forbiddenWords = [
    "SELECT",
    "DROP",
    "INSERT",
    "DELETE",
    "UPDATE",
    "SCRIPT",
    "ALERT",
    "--",
    ";",
    '"',
    "'",
  ];
  const inputUpperCase = input.toUpperCase();

  return forbiddenWords.some((word) => inputUpperCase.includes(word));
}

export function validateLogin(email: string, password: string) {
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Email inválido." };
  }

  if (!passwordRegex.test(password)) {
    return { valid: false, message: "Contraseña inválida." };
  }

  if (containsMaliciousPatterns(email) || containsMaliciousPatterns(password)) {
    return { valid: false, message: "Entrada maliciosa detectada." };
  }

  return { valid: true, message: "Login válido." };
}
