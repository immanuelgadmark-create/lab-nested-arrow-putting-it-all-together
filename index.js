const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  const maxAttempts = 3;
  return (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful!";
    }
    attemptCount++;
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    } 
      return `Incorrect password. ${maxAttempts - attemptCount} attempts(s) remaining.`;
    };

  };
  module.exports = createLoginTracker;
  