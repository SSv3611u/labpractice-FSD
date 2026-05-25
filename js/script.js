const demoButton = document.getElementById("demoButton");
const statusMessage = document.getElementById("statusMessage");
const productPanel = document.querySelector(".product-panel");

demoButton.addEventListener("click", () => {
  productPanel.classList.toggle("highlight");

  const isHighlighted = productPanel.classList.contains("highlight");
  statusMessage.textContent = isHighlighted
    ? "Snapshot opened: roadmap progress, active launch work, and experiments are ready to review."
    : "Snapshot closed. Click again to review the current product status.";
});
