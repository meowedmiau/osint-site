export function renderBoard(container, tools, onSelect) {
  container.innerHTML = "";
  if (tools.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = '<div class="cat">empty</div><div class="name">no tools match</div><div class="desc">clear the filter and try again.</div>';
    container.appendChild(empty);
    return;
  }

  const frag = document.createDocumentFragment();
  for (const t of tools) {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.dataset.id = t.id;
    card.innerHTML = `
      <div class="cat">${escapeHtml(t.category)}</div>
      <div class="name">${escapeHtml(t.name)}</div>
      <div class="desc">${escapeHtml(t.desc)}</div>
    `;
    card.addEventListener("click", () => onSelect(t.id));
    frag.appendChild(card);
  }
  container.appendChild(frag);
}

export function renderDrawer(tool, onSubmit) {
  const title = document.getElementById("drawer-title");
  const desc = document.getElementById("drawer-desc");
  const form = document.getElementById("drawer-form");
  const input = document.getElementById("drawer-input");
  const links = document.getElementById("drawer-links");

  title.textContent = tool.name;
  desc.textContent = tool.desc + (tool.hint ? " " + tool.hint : "");
  links.innerHTML = "";
  input.value = "";
  input.focus();

  form.onsubmit = (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    onSubmit(tool, v);
  };
}

export function renderLinks(url) {
  const links = document.getElementById("drawer-links");
  links.innerHTML = "";

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = url;
  li.appendChild(a);
  links.appendChild(li);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}