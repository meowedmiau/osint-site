import { tools, categories } from "../data/tools.js";

export function getTools() {
  return tools;
}

export function getCategories() {
  return categories;
}

export function filterTools(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return tools;
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.desc.toLowerCase().includes(q) ||
    t.id.toLowerCase().includes(q)
  );
}

export function toolById(id) {
  return tools.find(t => t.id === id) || null;
}

// Fill template with {q}, {q1}, {q2} placeholders.
export function buildUrl(tool, values) {
  let out = tool.template;
  for (const [k, v] of Object.entries(values)) {
    const enc = encodeURIComponent(v);
    out = out.split(`{${k}}`).join(enc);
  }
  return out;
}