<template>
  <site-header :anniverse=anniverse />
  <!-- <HelloWorld msg="20th" /> -->
  <router-view @update-anniverse="updateAnniverse($event)"></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/SiteHeader.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<script>
export default {
    data(){
    return{
      anniverse : 20
    }
  },
  methods:{
    updateAnniverse(data){
      console.log(data);
      this.anniverse = data
    }
  }

}
</script>

<style>
</style>