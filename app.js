import { createItem, generateItemList } from "./items.js";
import { calculatePrice, applyDiscount } from "./calculate.js";
import { buySummary } from "./summary.js";

let myList = [];

const item1 = createItem("bread", 8.90);
const item2 = createItem("agg", 13.3);
const item3 = createItem("milk", 7.40);
generateItemList(myList, item1);
generateItemList(myList, item2);
generateItemList(myList, item3);
buySummary(myList, 20);