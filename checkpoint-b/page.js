import { items } from "./items.js";

// Draws an array of items into #list, replacing whatever was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("stock-line");
    li.textContent = `${item.name} (${item.category})`;
    ul.append(li);
  });
}

// Only the bags.
export function matching() {
  return items.filter((item) => item.category === "bags");
}

// Draws everything now, and redraws only the bags when the button is clicked.
export function start() {
  renderItems(items);
  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}