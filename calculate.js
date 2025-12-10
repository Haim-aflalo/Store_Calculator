export function applyDiscount(itemList, discountPercent) {
  const totalprice = calculatePrice(itemList);
  return Math.floor(totalprice * (1 - discountPercent / 100));
}
