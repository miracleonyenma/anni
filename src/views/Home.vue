<template>
    <div class="relative container w-full h-screen flex items-center justify-center">
        <ul class="grid grid-cols-2 gap-3 p-3">
            <router-link to="/year/2020">
                <li class="p-4 bg-white text-purple-700 shadow-lg rounded-md flex text-center items-center justify-center hover:bg-purple-700 hover:text-white h-32 w-full">
                    <span class="text-2xl font-extrabold">2020</span>
                </li>
            </router-link>
            <router-link to="/year/2021">
                <li class="p-4 bg-white text-purple-700 shadow-lg rounded-md flex text-center items-center justify-center hover:bg-purple-700 hover:text-white h-32 w-full">
                    <span class="text-2xl font-extrabold">2021</span>
                </li>
            </router-link>
        </ul>
    </div>
    <!-- <Disqus /> -->
</template>

<script>
    export default {

    }
</script>

<style>

</style>