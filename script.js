document.addEventListener("DOMContentLoaded", () => {
  const unitContainers = document.querySelectorAll(".unit-container");

  unitContainers.forEach((container) => {
    container.addEventListener("click", (event) => {
      const isExpanded = container.classList.contains("expanded");

      unitContainers.forEach((item) => {
        item.style.border = "1px solid #d3d3d3";
        item.classList.remove("expanded");
        item.querySelector(".unit-sub-container").style.display = "none";
        item.querySelector("input[type='radio']").checked = false;
      });

      if (!isExpanded) {
        container.style.border = "2px solid #ff6b82";
        container.classList.add("expanded");
        container.querySelector(".unit-sub-container").style.display = "flex";
        container.querySelector("input[type='radio']").checked = true;
      }
    });

    const childElements = container.querySelectorAll(
      ".dropdown, input, select"
    );
    childElements.forEach((child) => {
      child.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });
});
