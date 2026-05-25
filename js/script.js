const demoButton = document.getElementById("demoButton");
const statusMessage = document.getElementById("statusMessage");
const productPanel = document.querySelector(".product-panel");
const snapshotTitle = document.getElementById("snapshotTitle");
const snapshotSubtitle = document.getElementById("snapshotSubtitle");
const snapshotScore = document.getElementById("snapshotScore");
const progressFill = document.getElementById("progressFill");

const snapshots = [
  {
    title: "Q3 Roadmap",
    subtitle: "Release confidence",
    score: "72%",
    progress: "72%",
    color: "#d98324",
    message: "Current view: roadmap health and launch readiness."
  },
  {
    title: "Backlog Focus",
    subtitle: "Priority alignment",
    score: "86%",
    progress: "86%",
    color: "#276f63",
    message: "Backlog view opened: high-value ideas are sorted for the next planning cycle."
  },
  {
    title: "Launch Plan",
    subtitle: "Go-to-market status",
    score: "64%",
    progress: "64%",
    color: "#4567a8",
    message: "Launch view opened: campaign tasks, risks, and owners are ready for review."
  }
];

let currentSnapshot = 0;

demoButton.addEventListener("click", () => {
  currentSnapshot = (currentSnapshot + 1) % snapshots.length;
  const snapshot = snapshots[currentSnapshot];

  snapshotTitle.textContent = snapshot.title;
  snapshotSubtitle.textContent = snapshot.subtitle;
  snapshotScore.textContent = snapshot.score;
  progressFill.style.width = snapshot.progress;
  progressFill.style.background = snapshot.color;
  statusMessage.textContent = snapshot.message;

  productPanel.classList.toggle("highlight");
});
