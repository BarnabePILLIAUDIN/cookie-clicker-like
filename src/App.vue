<template>
<h1 class="text-6xl font-impact m-10 font-mono uppercase b">🍪 Welcome to delicious cookie clicker</h1>
<div class="flex gap-4 text-2xl m-6 items-center">
  <h2 >🪙{{Intl.NumberFormat("en-US").format(coins)}} </h2>
  <h3>🖱️CPC: {{ Intl.NumberFormat("en-US").format( cpc) }}  ⌚CPS:{{ Intl.NumberFormat("en-US").format(cps) }}</h3>
  <button @:click="addCoins(cpc)" class="bg-blue-600 text-white px-4 py-2 rounded-md">Work</button>
</div>
<shop-com :coins="coins" :removeCoins="removeCoins" :setCpc="setCpc" :addCoins="addCoins" :cps="cps" :setCps="setCps"></shop-com>
</template>

<script>
import ShopCom from './components/ShopCom.vue';
export default {
  name: 'App',
  data() {
    return {
      coins: 0,
      cpc: 1,
      cps:0
    }
  },
  methods: {
    addCoins(amount) {
      this.coins +=amount 
    },
    removeCoins(amount) {
      this.coins-=amount
    },
    setCpc(newCpc) {
      this.cpc = newCpc
    },
    setCps(newCps) {
      this.cps=newCps
    }
  },
  components: {
    ShopCom
  },
}
</script>