import { filterTools, toolById, buildUrl } from "./tools.js";
import { renderBoard, renderDrawer, renderResults } from "./render.js";

const boardEl = document.getElementById("board");
const searchEl = document.getElementById("search");
const drawerEl = document.getElementById("drawer");
const drawerClose = document.getElementById("drawer-close");

let currentTool = null;

renderBoard(boardEl, filterTools(""), openDrawer);

searchEl.addEventListener("input", (e) => {
  renderBoard(boardEl, filterTools(e.target.value), openDrawer);
});

function openDrawer(id) {
  const tool = toolById(id);
  if (!tool) return;
  currentTool = tool;
  renderDrawer(tool, handleSubmit);
  document.getElementById("drawer-results").innerHTML = "";
  drawerEl.classList.add("open");
  drawerEl.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawerEl.classList.remove("open");
  drawerEl.setAttribute("aria-hidden", "true");
  currentTool = null;
}
drawerClose.addEventListener("click", closeDrawer);
drawerEl.addEventListener("click", (e) => {
  if (e.target === drawerEl) closeDrawer();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

function handleSubmit(tool, value) {
  const url = buildUrl(tool, { q: value });
  renderResults(url, tool.name);
}