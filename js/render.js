export function renderResults(url, host) {
  const results = document.getElementById("drawer-results");
  results.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "result";

  const urlEl = document.createElement("div");
  urlEl.className = "url";
  urlEl.textContent = url;

  const row = document.createElement("div");
  row.className = "row";

  const copyBtn = document.createElement("button");
  copyBtn.textContent = "copy";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(url);
      copyBtn.textContent = "copied";
      setTimeout(() => { copyBtn.textContent = "copy"; }, 1200);
    } catch {
      copyBtn.textContent = "copy failed";
    }
  });

  const loadBtn = document.createElement("button");
  loadBtn.className = "primary";
  loadBtn.textContent = "load inline";
  loadBtn.addEventListener("click", () => {
    if (wrap.querySelector("iframe")) return;
    const frame = document.createElement("iframe");
    frame.src = url;
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer";
    frame.allow = "clipboard-read; clipboard-write";
    frame.title = host;
    wrap.appendChild(frame);
  });

  const tabBtn = document.createElement("button");
  tabBtn.textContent = "open in tab";
  tabBtn.addEventListener("click", () => {
    window.open(url, "_blank", "noopener,noreferrer");
  });

  row.appendChild(copyBtn);
  row.appendChild(loadBtn);
  row.appendChild(tabBtn);

  wrap.appendChild(urlEl);
  wrap.appendChild(row);
  results.appendChild(wrap);
}