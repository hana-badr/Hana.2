// 06-modules — your work goes in this file, and in one you create yourself.
//
// Check your work with: npm test 06

import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 * productCount() -> 4
 */
export function productCount() {
  return products.length;
}

/**
 * A price tag for one product.
 * priceTag({ name: "Notebook", price: 45 }) -> "45 EGP"
 */
export function priceTag(product) {
  return formatEGP(product.price);
}

/**
 * A heading for the catalog page.
 * shopHeading() -> "GIU Campus Store catalog"
 */
export function shopHeading() {
  return `${shopName} catalog`;
}