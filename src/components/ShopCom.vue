<template>
  <table class="text-xl table-auto border border-collapse ml-4">
    <thead>
      <tr>
        <td v-for="header in headers" :key="header" class="border border-black p-4 text-centerter">
          <h2>{{ header }}</h2>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in Object.entries(shopData)" :key="item.name" class="p-4 ">
        <td class="border border-black p-4">{{ item[1].name }}</td>
        <td class="border border-black p-4 text-right">{{ Intl.NumberFormat("en-US").format(item[1].price) }}</td>
        <td class="border border-black p-4 text-right">{{ Intl.NumberFormat("en-US").format(item[1].cpc)}}</td>
        <td class="border border-black p-4 text-right">{{ Intl.NumberFormat("en-US").format(item[1].cps) }}</td>
        <td class="border border-black p-4 text-right">{{ Intl.NumberFormat("en-US").format(item[1].owned) }}</td>
        <td class="border border-black p-4"> <button @click="buy(item[0])" class="bg-green-600 text-white rounded-xl px-4 py-2">Buy</button></td>
        <td class="border border-black p-4"><button @click="sell(item[0])" class="bg-red-600 text-white rounded-xl px-4 py-2">Sell</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
const updateCpc = (data) => {
  return Object.entries(data)
    .map(([, value]) => value.cpc * value.owned)
    .reduce((acc, value) => acc + value, 1)
}

const updateCps = (data) => {
  return Object.entries(data)
    .map(([, value]) => value.cps * value.owned)
    .reduce((acc, value) => acc + value, 1)
}


export default {
  name: "ShopCom",
  props: ["coins", "cps", "removeCoins", "addCoins", "setCpc", "setCps"],
  components:["ActionButton"],
  data() {
    return {
      headers: ["Name", "Price", "CPC", "CPS", "Owned", "Buy ?", "Sell ?"],
      shopData: {
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
          owned: 0
        },
        goldenPickaxe: {
          name: "Golden Pickaxe",
          price: 200,
          cpc: 150,
          cps: 25,
          owned: 0
        },
        diamodPickaxe: {
          name: "Diamond Pickaxe",
          price: 100000 ,
          cpc: 80000 ,
          cps: 15000,
          owned:0
        },
        supremPickaxe: {
          name: "Suprem pickaxe",
          price: 100000000 ,
          cpc: 1000000 ,
          cps: 100000,
          owned:0
        }
      },
      intervall: null,
    }
  },
  methods: {
    buy(item) {
      if (this.coins < this.shopData[item].price) {
        alert("You don't have enough coins")
        return
      }
      this.removeCoins(this.shopData[item].price)
      this.shopData[item].owned += 1
      this.setCpc( updateCpc(this.shopData));
      this.setCps( updateCps(this.shopData))
    },
    sell(item) {
      console.log("Trying to sell");
      if (this.shopData[item].owned <= 0) {
        alert("You can't sell somethings you don't owne")
        return
      }
      this.addCoins(this.shopData[item].price / 2)
      this.shopData[item].owned -= 1
      this.setCpc( updateCpc(this.shopData))
      this.setCps((updateCps(this.shopData)))
    }
  },
  created() {
    this.intervall = setInterval(()=>{this.addCoins(this.cps)},1000)
  }
}
</script>