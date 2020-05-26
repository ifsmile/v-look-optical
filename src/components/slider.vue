<template>
    <div class="slider-wrap"
        ref="sliderWrap">
        <div class="slider-btn"
            ref="sliderBtn"
            :style="{ left: left + 'px' }"></div>
    </div>
</template>
<script>
export default {
    props: {
        imgLenth: {
            type: Number,
            default() {
                return 16
            }
        }
    },
    data() {
        return {
            left: 0,
            maxLeft: 0,
            wrapLeft: 0,
            perWidth: 0,
            lastIndex: 0,
            isPhone: false
        }
    },
    computed: {
        events() {
            if(this.isPhone) {
                return {
                    down: 'ontouchstart',
                    move: 'ontouchmove',
                    up: 'ontouchend'
                }
            } else {
                return {
                    down: 'onmousedown',
                    move: 'onmousemove',
                    up: 'onmouseup'
                }
            }
        }
    },
    methods: {
        mousedown(e) {
            this.draging = true
            document[this.events.move] = e => {
                const clientX = this.isPhone ? e.touches[0].clientX : e.clientX
                let left = clientX - this.wrapLeft
                if(left > this.maxLeft) left = this.maxLeft
                else if(left < 0) left = 0
                this.left = left
                const lastIndex = Math.floor(left / this.perWidth)
                if(this.lastIndex !== lastIndex) {
                    this.lastIndex = lastIndex
                    this.$emit('change', lastIndex)
                    console.log(666, this.lastIndex)
                }
            }
            document[this.events.up] = () => {
                document[this.events.move] = null
                document[this.events.up] = null
            }
        },
        init() {
            const { width, left } = this.$refs.sliderWrap.getBoundingClientRect()
            const { width: btnWidth } = this.$refs.sliderBtn.getBoundingClientRect()
            this.wrapLeft = left
            this.maxLeft = width - btnWidth
            // 每一段的宽度
            this.perWidth = this.maxLeft / (this.imgLenth - 1)
            this.left = (this.maxLeft - this.perWidth) / 2
            this.lastIndex = Math.round(this.left / this.perWidth)
            this.$emit('change', this.lastIndex)
            console.log(555, this.lastIndex)
            this.$refs.sliderBtn[this.events.down] = this.mousedown
        },
        checkIsPhone() {
            const sUserAgent = navigator.userAgent.toLowerCase()
            const bIsIpad = sUserAgent.match(/ipad/i)
            const bIsIphoneOs = sUserAgent.match(/iphone os/i)
            const bIsMidp = sUserAgent.match(/midp/i)
            const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i)
            const bIsUc = sUserAgent.match(/ucweb/i)
            const bIsAndroid = sUserAgent.match(/android/i)
            const bIsCE = sUserAgent.match(/windows ce/i)
            const bIsWM = sUserAgent.match(/windows mobile/i)
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) this.isPhone = true // 移动设备
            else this.isPhone = false // PC
        }
    },
    mounted() {
        this.checkIsPhone()
        this.init()
        // window.onresize = () => {
        //     this.timeout = setTimeout(() => {
        //         this.init()
        //     }, 1000)
        // }
    }
}
</script>
<style lang="scss" scoped>
.slider- {
    &wrap {
        height: 30px;
        width: 60%;
        text-align: center;
        background: #aaa;
        border-radius: 15px;
        margin: 20px auto;
        position: relative;
    }
    &btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #eee;
        background: #eee;
        cursor: pointer;
        position: absolute;
    }
}
@media screen and(max-width:723px) {
    .slider-wrap {
        width: 90%;
    }
}
</style>