document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blockedScript = urlParams.get("blockedScript");
  if (blockedScript) {
    alert(
      "Redirection to Google.com due to polyfill.io script found on: " +
        blockedScript
    );
  }
});
