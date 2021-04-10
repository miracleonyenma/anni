<template>
  <section id=" ">
    <header data-text="20th" class="relative w-full h-72 bg-gradient-to-b from-purple-700 to-white">
      <div class="header__wrapper px-3 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 class="font-black text-5xl pb-2">Happy {{ msg }} Anniversary!</h1>
        <p>Mum and Dad!</p>
      </div>
    </header>

    <article class="relative px-3">
      <div class="article__wrapper bg-white rounded-md transform -translate-y-12 shadow-xl m-auto max-w-2xl p-4">
        <h1 class="article__heading text-2xl font-bold border-l-4 border-purple-700 pl-3 mb-4">
          {{currentData.heading}}
        </h1>
        <p v-for="(p, index) in currentData.article.p" :key="index">
          {{p}}
        </p>
        <footer data-text="Your kids" class="text-right mt-3">
          <i>Sincerely, your kids</i>
          <p>Have a blessed married life!🤵🏾👰🏾</p>
        </footer>
      </div>
    </article>

    <aside>
    </aside>
  </section>
</template>

<script setup>
  import {
    defineProps,
    reactive
  } from "vue";

  defineProps({
    msg: String,
  });

  const state = reactive({
    count: 0,
  });
</script>

<script>
  import data from "../data/data.json";

  export default {
    components:{
    },
    data() {
      return {
        pageConfig: {
          title: 'anniverse'
        },
        year: this.$route.params.id,
        anniverse: new Date().getFullYear - 2000,
        currentData: {
          "heading": "Celebrating God's Faithfullness",
          "article": {
            "p": [
              "We are so blessed and happy to be a witness to this wonderful work of God! 😇 It was Him from the start. He kept and preserved you for his glory to make manifest in all our lives. 😇",
              "For every thing he has done, we are forever grateful. With joy, the both of you 💑walked a journey that so far took decades to get to where you are now and you're still moving 🙌🏾.",
              "As we celebrate 2 decades of his blessings we pray he continues to walk and guide you. He says in his word; Eccl 4:9: It's better to have a partner than go it alone. Share the work, share the wealth. Lam.3:22: Through the LORD's mercies we are not consumed, Because His compassions fail not. Lam.3:23: They are new every morning; Great is Your faithfulness.",
              "And as for the lives you've blessed, our lives, we ask he blesses you more ✨."
            ],
            "b": "Happy anniversary 🎉🎊"
          }
        },
      };
    },
    methods: {
      getAnniverse(year) {
        let anniverse = year - 2000;
        console.log(anniverse);
        this.anniverse = anniverse;
        this.$emit("updateAnniverse", anniverse);

        return anniverse;
      },
      getData(data) {
        let parsedData;
        try {
          parsedData = JSON.parse(data);
        } catch (err) {
          console.error("resolved", err);
          parsedData = data;
        }

        Object.keys(parsedData).includes(this.year) ?
          (this.currentData = parsedData[this.year]) :
          (this.currentData = parsedData[2020]);
      },
    },
    mounted() {
      this.getAnniverse(this.year);
      this.getData(data);
    },
  };
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>