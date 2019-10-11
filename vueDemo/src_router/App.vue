<template>
  <div>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodlist">GoodList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Account from './components/Account'
import GoodList from './components/GoodList'
export default {
  components: {
    Account,
    GoodList
  }
}
</script>

<style>

</style>