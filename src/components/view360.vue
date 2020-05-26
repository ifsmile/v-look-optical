<template>
    <div class="view-mask flex-center-middle"
        v-if="visible">
        <div class="view-body flex-y">
            <div class="view-body-header">
                <i class="v-icon-close"
                    @click.stop="$emit('update:visible', false)"></i>
            </div>
            <div class="view-body-box flex-1">
                <img v-for="(img, index) in imgs"
                    :key="index"
                    class="view-body-box-img"
                    :class="{active: index === curIndex}"
                    :src="img">
            </div>
            <slider class="view-body-footer"
                @change="index => curIndex = index"></slider>
        </div>
    </div>
</template>
<script>
import Slider from './slider'

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    components: { Slider },
    data() {
        return {
            curIndex: 0,
            urls: [
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/23f15f9102f94521bda503b83d465935.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/4a32260e896a4cd7a281146b230f4b40.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/f8c7733739aa4e7488514577461614e5.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/0096a3d2689147b3994949e6943b0221.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/18dff67f596e49c6b6abf7f4eff51ac0.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/442d3e40969a4fa0ae2b4d12a46227c8.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/8967705f7acf4757b7e59880b10fdc95.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/7c7a1fe8b61e4e02a635735c74f858fc.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/ef5fbaf170e341df9b39e968e9787bee.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/78d13cf5a84f4fb1b395d440cf727d4c.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/a2ddae8442654dfcba4a6308a0791b87.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/0e072e0c93ff47fd9db6ddc90ab03e2c.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/79986c222b814ec19a74e66df0879fab.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/b9e7cca43bfa4a8bbd665e6999d9ff55.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/2f2921e60dbc440db667fb7211786093.jpg',
                'https://d11mqqjj4dkdrj.cloudfront.net/media/frame_multi_angle/2c38c1b2627e4c19a502f849d556d721.jpg'
            ]
        }
    },
    computed: {
        imgs() {
            return this.urls.slice(8).concat(this.urls.slice(0, 8)).reverse()
        }
    }
}
</script>
<style lang="scss" scoped>
.view- {
    &mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        z-index: 999;
    }
    &body {
        width: 60%;
        height: 60%;
        padding: 10px;
        background: #fff;
        &-header {
            text-align: right;
            padding: 6px 10px;
        }
        &-box {
            &-img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                display: none;
                &.active {
                    display: block;
                }
            }
        }
    }
}

@media screen and(max-width:723px) {
    .view-body {
        width: 96%;
        height: 96vw;
    }
}
</style>