
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

document.addEventListener("DOMContentLoaded", function () {
  const planButtons = document.querySelectorAll('.btn-plan');
  const freeTrialButton = document.querySelector('.btn-trial');

  // Function to handle user choice
  function handleUserChoice(choice) {
    switch (choice) {
      case 'basic':
      case 'standard':
      case 'premium':
        // Redirect to sign-in page with the selected plan
        window.location.href = `/html/signin.html?plan=${choice}`;
        break;
      case 'free-trial':
        // Redirect to free trial page or show a modal
        window.location.href = '/html/free-trial.html';
        break;
      default:
        console.error('Unknown choice:', choice);
    }
  }

  // Add click event listeners to plan buttons
  planButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Handle user choice
      handleUserChoice(this.getAttribute('data-plan'));
    });
  });

  // Add click event listener for the free trial button
  if (freeTrialButton) {
    freeTrialButton.addEventListener('click', function() {
      handleUserChoice('free-trial');
    });
  }
});