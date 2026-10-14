// 11-dom-read - your work goes in this file.
// Check your work with: npm test 11
// exercise.html is written for you and must not be edited.

// The text of the page's main heading.
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

// How many product cards are on the page.
export function productCount() {
  return document.querySelectorAll(".card").length;
}

// The name in every card, in the order they appear.
export function productNames() {
  return Array.from(document.querySelectorAll(".card")).map(
    (card) => card.querySelector("h3").textContent
  );
}

// The price text on the card with that name, or null if there is no such card.
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

// The names on the cards that have the sold-out class.
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}