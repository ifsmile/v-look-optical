<template>
<div class="list-wrap">
    <list-item v-for="item in list" :key="item.id" :data="item"></list-item>
</div>
</template>
<script>
import ListItem from 'components/list-item'

export default {
    data () {
        return {
            list: [{
                name: 'Fine1',
                money: 100,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/7d9ea8c4b7d249c1baf645da215aa382.jpg'
                ]
            }, {
                name: 'Fine2',
                money: 200,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/88c3239efa4c44fd9d5d5aac52e716ef.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/49d0f1291c474aceb1df50d984fa70f8.jpg'
                ]
            }, {
                name: 'Fine3',
                money: 300,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/7d9ea8c4b7d249c1baf645da215aa382.jpg'
                ]
            }, {
                name: 'Fine3',
                money: 300,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/7d9ea8c4b7d249c1baf645da215aa382.jpg'
                ]
            }]
        }
    },
    components: { ListItem }
}
</script>
<style scoped>
.list-wrap {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>