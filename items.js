export function createItem(name, price){

    let item = {name : name, price : price};
    return item;
};


export function generateItemList(itemList, item){

    itemList.push(item);
    return itemList;
};