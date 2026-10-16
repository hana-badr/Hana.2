


export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

// Empties both boxes.
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

// Draws the list from an array of items, replacing whatever was there.
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  });
}

// Listens for the form's submit and does the five steps from the spec.
export function wireForm() {
  const items = [];

  document.querySelector("#product-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();
    const error = document.querySelector("#error");

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}