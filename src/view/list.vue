<template>
<div class="list-wrap">
    <div class="phone-list-header">
        <h2>Glasses frames for women</h2>
        <p>Our glasses frames for women range, Our glasses frames for women range, Our glasses frames for women range, Our glasses frames for women range</p>
        <i class="v-icon-arrow-down"></i>
    </div>
    <div class="phone-list-filter-wrap">
        <div class="phone-list-filter-top">
            <span>Sort by: Popularity <i class="v-icon-arrow-down"></i></span>
            <span class="phone-list-filter-top-right">Filter(1)<i class="v-icon-filter"></i></span>
        </div>
        <div class="phone-list-filter-bottom">
            <span>Frame:612</span>
            <i class="v-icon-equal"></i>
            <i class="v-icon-menu"></i>
        </div>
    </div>
    <div class="list-box">
        <list-item v-for="item in list" :key="item.id" :data="item"></list-item>
    </div>
    <img :src="listBg1" alt=""
        class="list-bg1">
    <div class="phone-list-header swiper">
        <h2>Glasses frames for women</h2>
        <h4>Your Prescription Is Our Business</h4>
        <p>Our glasses frames for women range, Our glasses frames for women range, Our glasses frames for women range, Our glasses frames for women range</p>
        <div class="phone-list-header-swiper-btn-wrap">
            <span class="phone-list-header-swiper-btn active"></span>
            <span class="phone-list-header-swiper-btn"></span>
            <span class="phone-list-header-swiper-btn"></span>
        </div>
    </div>
    <div class="list-box">
        <list-item v-for="item in list" :key="item.id" :data="item"></list-item>
    </div>
    <div class="list-footer-pagination list-footer-pagination-arrow">
        <i class="v-icon-arrow-left"></i>
        <span class="list-footer-pagination-no">1</span>
        <span class="list-footer-pagination-no">2</span>
        <span class="list-footer-pagination-no">3</span>
        <i class="v-icon-arrow-right list-footer-pagination-arrow"></i>
    </div>
</div>
</template>
<script>
import ListItem from 'components/list-item'

export default {
    data () {
        return {
            listBg1: require('assets/list-bg1.jpg'),
            list: [{
                name: 'Fine1',
                money: 100,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/7d9ea8c4b7d249c1baf645da215aa382.jpg'
                ],
                icon: 'v-icon-flower'
            }, {
                name: 'Fine2',
                money: 200,
                imgs: [
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/88c3239efa4c44fd9d5d5aac52e716ef.png',
                    'https://d11mqqjj4dkdrj.cloudfront.net/media/frame/49d0f1291c474aceb1df50d984fa70f8.jpg'
                ],
                icon: 'v-icon-Star'
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
                ],
                icon: 'v-icon-Star'
            }]
        }
    },
    components: { ListItem }
}
</script>
<style scoped lang="scss">
.list- {
    &wrap {
        width: 60%;
        margin: 0 auto;
    }
    &box {
        display: flex;
        flex-wrap: wrap;
    }
    &bg1 {
        width: 100%;
    }
    &footer-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        &-arrow {
            font-size: 20px;
        }
        &-no {
            border-radius: 50%;
            border: 1px solid #000;
            margin: 0 10px;
            width: 24px;
            height: 24px;
            line-height: 22px;
            text-align: center;
            font-size: 16px;
        }
    }
}
.phone-list- {
    &header {
        display: none;
        text-align: center;
        border-top: 30px solid orange;
        border-bottom: 30px solid orange;
        & > h2 {
            font-size: 32px;
        }
        &-swiper-btn {
            &-wrap {
                display: flex;
                justify-content: center;
            }
            width: 10px;
            height: 10px;
            border: 1px solid #000;
            border-radius: 50%;
            margin: 0 6px;
            &.active {
                background: #000;
            }
        }
        &.swiper {
            border: 0;
        }
    }
    &filter- {
        &wrap {
            display: none;
        }
        &top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            &-right {
                color: orange;
            }
        }
        &bottom {
            text-align: right;
            padding: 10px;
            & .v-icon-equal {
                color: orange;
                font-size: 18px;
            }
            & .v-icon-menu {
                color: #aaa;
            }
        }
    }
}
@media screen and (max-width: 1200px) and (min-width: 976px) {
    .list-wrap {
        width: 75%;
    }
}
@media screen and (max-width: 976px) and (min-width: 768px) {
    .list-wrap {
        width: 80%;
    }
}
@media screen and (max-width: 768px) {
    .list-wrap {
        width: 100%;
    }
    .phone-list-header {
        display: block;
    }
    .phone-list-filter-wrap {
        display: block;
    }
}
</style>