<template>
    <div>
        <router-link :to="{name:'home'}"></router-link>
        <router-link :to="{name:'about'}"></router-link>
        <router-view></router-view>

    </div>
</template>