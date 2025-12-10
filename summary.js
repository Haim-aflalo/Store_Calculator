import { applyDiscount, calculatePrice } from './calculate.js';

export function buySummary(itemList, discountPercent = 0) {
  let itemSummary = {};
  const total = calculatePrice(itemList);
  const reduced = applyDiscount(itemList, discountPercent);
  let prodQuantity = 0;
  for (let item of itemList) {
    if (item.name in itemSummary) {
      itemSummary[item.name] += 1;
    } else {
      itemSummary[item.name] = 1;
    }
  }
  for (let key in itemSummary) {
    prodQuantity += itemSummary[key];
  }
  itemSummary['total products'] = prodQuantity;
  itemSummary['total price'] = total;
  itemSummary['reduced price'] = reduced;
  console.table(itemSummary);
  return
}
