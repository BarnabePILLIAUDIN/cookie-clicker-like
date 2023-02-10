const data = {
  bronzePickaxe: {
    name: "Bronze Pickaxe",
    price: 10,
    cpc: 5,
    cps: 0,
    owned: 0,
  },
  silverPickaxe: {
    name: "Silver Pickaxe",
    price: 50,
    cpc: 30,
    cps: 5,
    owned: 0,
  },
  goldenPickaxe: {
    name: "Golden Pickaxe",
    price: 200,
    cpc: 150,
    cps: 25,
    owned: 0,
  },
};

console.log(Object.entries(data)[1]);

console.log(typeof Intl.NumberFormat("en-US").format(15000));
