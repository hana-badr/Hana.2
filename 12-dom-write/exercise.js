// 12-dom-write - your work goes in this file.
// Check your work with: npm test 12
// exercise.html is written for you and must not be edited.

// Finds the card whose h3 says this name, or undefined if there is none.
function findCard(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  return cards.find((card) => card.querySelector("h3").textContent === name);
}

// Adds one product card to the end of the list.
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(heading, priceTag);
  document.querySelector("#list").append(card);
}

// Removes the card with that name, if there is one.
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

// Marks the card with that name as sold out, if there is one.
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

// Removes every card from the list.
export function clearProducts() {
  document.querySelectorAll(".card").forEach((card) => card.remove());
}

// Wires the two buttons up to the functions above.
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => addProduct("Notebook", 45));
  document.querySelector("#reset").addEventListener("click", () => clearProducts());
}