export function createEl(tag, className, parent) {
  const el = document.createElement(`${tag}`);
  el.classList.add(`${className}`);
  parent.appendChild(el);
  return el;
}
