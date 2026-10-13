function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;
  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }
    attemptCount++;
    if (passwordAttempt === userInfo.password) {
      return "Login successful!";
    }
    if (attemptCount >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    } 
      return `incorrect password. ${maxAttempts - attemptCount} attempts(s) remaining.`;
    };
    return loginAttempt;
  }
  module.exports = createLoginTracker;
  const tracker = createLoginTracker({ username: "user1", password: "password123"});
  console.log(tracker("wrongpassword"));
  console.log(tracker("wrongpassword"));
  console.log(tracker("wrongpassword"));
  console.log(tracker("password123"));
