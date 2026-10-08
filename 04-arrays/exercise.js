// 04-arrays — your work goes in this file.
//
// The lesson is in example.js:  node 04-arrays/example.js
// Check your work with:         npm test 04
//
// A product looks like this:
//   { id: 1, name: "Notebook", price: 45, inStock: true }

/**
 * Takes the name out of every product.
 */
export function productNames(products) {
  return products.map((product) => product.name);
}

/**
 * Keeps only the products that cost less than maxPrice.
 * A product priced exactly at maxPrice is NOT cheaper than it.
 */
export function cheaperThan(products, maxPrice) {
  return products.filter((product) => product.price < maxPrice);
}

/**
 * Looks up one product by its id.
 * Returns the product, or undefined if there is none.
 */
export function findById(products, id) {
  return products.find((product) => product.id === id);
}

/**
 * Adds up the price of every product. 0 for an empty list.
 */
export function totalPrice(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

/**
 * The names of the products that are in stock, in order.
 */
export function inStockNames(products) {
  return products.filter((product) => product.inStock).map((product) => product.name);
}