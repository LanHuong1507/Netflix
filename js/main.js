// main.js

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.querySelector('p').dataset.target;
      activateTab(target);
      toggleTabBorder(tab);
    });
  });

  function activateTab(target) {
    tabContents.forEach((content) => {
      content.classList.remove("show");
    });
    document.getElementById(target).classList.add("show");
  }

  function toggleTabBorder(selectedTab) {
    tabs.forEach((tab) => {
      tab.classList.remove("tab-border");
    });
    selectedTab.classList.add("tab-border");
  }
});
