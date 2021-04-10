<template>
  <header class="sticky top-0 left-0 w-full flex flex-row items-center justify-center bg-purple-700 p-3 z-10">
      <div class="header__wrapper text-white font-bold m-auto max-w-md">Celebrating {{anniverse}} years of God's faithfulness</div>
  </header>
</template>

<script>
export default {
    name: 'SiteHeader',
    props: ['anniverse'],
    mounted(){
        console.log(this.anniverse)
    }
    // data(){
    //     return{
    //         anniverse: "21"
    //     }
    // }
}
</script>

<style>

</style>