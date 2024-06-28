const hacks = "cdn.polyfill.io";

const redirect = () => {
  window.location.href =
    "https://www.google.com?blockedScript=" +
    encodeURIComponent(window.location.href);
};

document.addEventListener("DOMContentLoaded", () => {
  let scriptTags = document.querySelectorAll("script");
  scriptTags.forEach((script) => {
    if (script.src.includes(hacks)) {
      window.stop();
      redirect();
    }
  });
});

// Optionally, observe for dynamically added scripts
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.tagName === "SCRIPT" && node.src.includes(hacks)) {
        window.stop();
        redirect();
      }
    });
  });
});

observer.observe(document, { childList: true, subtree: true });
