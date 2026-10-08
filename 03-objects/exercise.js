// 03-objects — your work goes in this file.
//
// The lesson is in example.js:  node 03-objects/example.js
// Check your work with:         npm test 03
//
// A product looks like this:
//   { id: 1, name: "Notebook", price: 45, inStock: true }

/**
 * The name of a product.
 * productName({ name: "Notebook", ... }) -> "Notebook"
 */
export function productName(product) {
  return product.name;
}

/**
 * Reads whichever field it is asked for.
 * getField(product, "price") -> 45
 * getField(product, "colour") -> undefined
 */
export function getField(product, field) {
  return product[field];
}

/**
 * The city a student lives in.
 * { name: "Salma", address: { city: "Cairo", street: "El Tahrir" } }
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * A one-line summary of a product.
 * summarize({ name: "Notebook", price: 45, ... }) -> "Notebook costs 45 EGP"
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * A copy of a product with a different price. The original must not change.
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}