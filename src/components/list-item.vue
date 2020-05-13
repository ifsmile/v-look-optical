<template>
  <div class="list-item-wrap">
    <div class="img-wrap">
      <img :src="data.imgs[0]" alt="" class="normal">
      <img :src="data.imgs[1]" alt="" class="hover">
    </div>
    <div class="list-item-btm">
        <div class="list-item-radio-wrap">
        <radio-component></radio-component>
        <i class="list-item-heart-icon"
            :class="heartActive ? 'v-icon-heart' : 'v-icon-heart1'"
            @click="heartActive = !heartActive"></i>
        </div>
        <div class="list-item-title">
            <span>{{data.name}}</span>
            <span>${{data.money}}</span>
        </div>
        <div class="list-item-button">More Detail</div>
    </div>
  </div>
</template>
<script>
import RadioComponent from './radio-component'

export default {
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: { RadioComponent },
    data() {
        return {
            heartActive: false
        }
    }
}
</script>
<style scoped>
.list-item-wrap {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 33.3%;
  height: 260px;
  min-width: 150px;
}
.img-wrap {
  padding: 20px 0;
}
.img-wrap > img {
  width: 100%;
  height: 80px;
  object-fit: contain;
}
.img-wrap > .hover {
  display: none;
}
.img-wrap:hover > .normal {
  display: none;
}
.img-wrap:hover > .hover {
  display: inherit;
}
.list-item-btm {
    padding: 0 25px;
}
.list-item-radio-wrap {
  display: flex;
  justify-content: space-between;
}
.list-item-heart-icon {
  color: red;
}
.list-item-title {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 20px;
}
.list-item-button {
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 6px 0;
    text-align: center;
    border: 2px solid #21baff;
    color: #21baff;
    background: #fff;
    border-radius: 8px;
    cursor: pointer;
}
.list-item-button:active {
    background: #21baff;
    color: #fff;
}
</style>