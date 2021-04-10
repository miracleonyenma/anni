<template>
  <section id=" ">
    <header data-text="20th" class="relative w-full h-64 bg-gradient-to-b from-gray-400 to-gray-700">
      <div >
        <h1>Happy {{msg}} Anniversary!</h1>
        <p>Mum and Dad!</p>
      </div>
    </header>

    <article>
      <h1>Celebrating God's Faithfullness</h1>
      <p>We are so blessed and happy to be a witness to this wonderful work of God! 😇 It was Him from the start. He
        kept
        and preserved you for his glory to make manifest in all our lives. 😇</p>

      <p>For every thing he has done, we are forever grateful. With joy, the both of you 💑walked a journey that so far
        took decades to get to where you are now and you're still moving 🙌🏾.
      </p>

      <p>As we celebrate 2 decades of his blessings we pray he continues to walk and guide you.
        He says in his word:
        <span class="text">Eccl 4:9 </span>It's better to have a partner than go it alone. Share the work, share the
        wealth.
        <strong>Lam.3:22</strong>Through the LORD's mercies we are not consumed, Because His compassions fail not.
        <strong>Lam.3:23</strong>They are new every morning; Great is Your faithfulness.
      </p>


      <p>And as for the lives you've blessed, our lives, we ask he blesses you more ✨.
        <b>Happy anniversary </b>🎉🎊</p>
      <footer data-text="Your kids">
        <p>Have a blessed married life!</p>
      </footer>
    </article>

  </section>
</template>

<script setup>
  import {
    defineProps,
    reactive
  } from 'vue';

  defineProps({
    msg: String
  })

  const state = reactive({
    count: 0
  })
</script>

<script>
export default {
      data(){
      return{
        anniverse : new Date().getFullYear - 2000
      }
    },
    methods:{
      getAnniverse(year){
        let anniverse = year - 2000;
        console.log(anniverse);
        this.anniverse = anniverse;
        this.$emit('updateAnniverse', anniverse);

        return anniverse;
      }
    },
    mounted(){
      this.getAnniverse(this.$route.params.id);
    }
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>