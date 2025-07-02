document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const issue = document.getElementById("issue").value.trim();

  let valid = true;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("issueError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  // Validate name
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Please enter a valid name.";
    valid = false;
  }

  // Validate email using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    valid = false;
  }

  // Validate issue message
  if (issue.length < 10) {
    document.getElementById("issueError").textContent =
      "Please describe your issue (at least 10 characters).";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("successMsg").textContent =
      "Support request submitted successfully!";
    document.getElementById("supportForm").reset();
  }
});
