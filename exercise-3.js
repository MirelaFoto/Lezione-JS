function createStore() {
  let items = []
  return function closureFunction(newItems) {
    if (newItems != " ") {
      items.push(Object.values(newItems))
    }
    return console.log(" Id e nome del prodotto :\n" + items);
  }
}

const redPants = {
  id: 1,
  name: 'Red Pants'
};
const whiteHat = {
  id: 2,
  name: 'White Hat'
};
const blackSneakers = {
  id: 3,
  name: 'Black Sneakers'
};

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)


console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
// --- Dress Store ---
//  Id e nome del prodotto :
// 1,Red Pants
//  Id e nome del prodotto :
// 1,Red Pants,2,White Hat
// --- Shoes Store ---
//  Id e nome del prodotto :
// 3,Black Sneakers