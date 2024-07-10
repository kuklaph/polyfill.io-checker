const hacks = ["cdn.polyfill.io", "cdn.polyfill.com"];

const redirect = () => {
  window.location.href =
    "https://www.google.com?blockedScript=" +
    encodeURIComponent(window.location.href);
};

document.addEventListener("DOMContentLoaded", () => {
  let scriptTags = document.querySelectorAll("script");
  scriptTags.forEach((script) => {
    if (hacks.some((hack) => script.src.includes(hack))) {
      window.stop();
      redirect();
    }
  });
});

// Optionally, observe for dynamically added scripts
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (
        node.tagName === "SCRIPT" &&
        hacks.some((hack) => node.src.includes(hack))
      ) {
        window.stop();
        redirect();
      }
    });
  });
});

observer.observe(document, { childList: true, subtree: true });
