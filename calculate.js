
export function calculatePrice(itemList){

    let totalPrice = 0;

    for (let item of itemList){

        totalPrice += item["price"];
    };

    return totalPrice
};



export function applyDiscount(itemList, discountPercent) {
  const totalprice = calculatePrice(itemList);
  return Math.floor(totalprice * (1 - discountPercent / 100));
};
