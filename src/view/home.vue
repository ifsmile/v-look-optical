<template>
    <div class="wrap">
        <img src="../assets/logo.png">
        <router-link :to="{name:'list'}">列表页</router-link>
    </div>
</template>
<style scoped>
.wrap {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
