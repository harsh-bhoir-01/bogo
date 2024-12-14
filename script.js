document.addEventListener("DOMContentLoaded", () => {
  const unitContainers = document.querySelectorAll(".unit-container");

  unitContainers.forEach((container) => {
    // Handle container and radio button clicks
    container.addEventListener("click", () => {
      toggleContainer(container);
    });

    const radioButton = container.querySelector("input[type='radio']");
    radioButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from bubbling to the container
      toggleContainer(container);
    });

    // Prevent dropdowns, inputs, and selects from triggering the container click
    const childElements = container.querySelectorAll(
      ".dropdown, input, select"
    );
    childElements.forEach((child) => {
      child.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });

  // Function to toggle the container
  function toggleContainer(container) {
    const isExpanded = container.classList.contains("expanded");

    // Close all containers
    unitContainers.forEach((item) => {
      item.style.border = "1px solid #d3d3d3";
      item.classList.remove("expanded");
      item.querySelector(".unit-sub-container").style.display = "none";
      item.querySelector("input[type='radio']").checked = false;
    });

    // Expand the clicked container if it wasn't already expanded
    if (!isExpanded) {
      container.style.border = "2px solid #ff6b82";
      container.classList.add("expanded");
      container.querySelector(".unit-sub-container").style.display = "flex";
      container.querySelector("input[type='radio']").checked = true;
    }
  }
});
