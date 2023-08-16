let purchases = [
  {
    name: "Product 1",
    quantity: 5,
    sell: false,
    cost: 99,
    sum: this.quantity * this.cost,
  },
  {
    name: "Product 2",
    quantity: 2,
    sell: true,
    cost: 115,
    sum: this.quantity * this.cost,
  },
  {
    name: "Product 3",
    quantity: 4,
    sell: true,
    cost: 213,
    sum: this.quantity * this.cost,
  },
  {
    name: "Product 4",
    quantity: 3,
    sell: false,
    cost: 68,
    sum: this.quantity * this.cost,
  },
];

function displayPurchases() {
  function displayPurchasesBySell(sell) {
    purchases
      .filter((purchase) => purchase.sell === sell)
      .forEach((purchase) => console.log(purchase));
  }
  displayPurchasesBySell(false);
  displayPurchasesBySell(true);
}

displayPurchases();

function buyProduct(productName) {
  const product = purchases.find((purchase) => purchase.name === productName);
  if (product) {
    product.sell = !product.sell;
  }
}

buyProduct("Product 2");
