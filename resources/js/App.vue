<template>
        <router-view></router-view>
    <div class="bg-teal-500 h-screen text-center flex items-center justify-evenly">
        <router-link :to="{name:'home'}">Go to Home</router-link>
    </div>
</template>