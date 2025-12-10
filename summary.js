import { applyDiscount } from './calculate.js';

export function buySummary(itemList, discountPercent = 0) {
  let itemSummary = {};
  const totalprice = calculatePrice();
  const reducedPrice = applyDiscount(itemList, discountPercent);
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
  console.table({
    prodQuantity: prodQuantity,
    totalPrice: totalprice,
    reducedPrice: reducedPrice,
  });
  return;
}

let a = [{ name: 2 }, { name: 2 }, { name: 3 }];
buySummary(a);
