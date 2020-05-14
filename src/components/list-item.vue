<template>
  <div class="list-item-wrap">
    <div class="list-item-top-icon">
      <i v-if="data.icon"
        :class="data.icon"></i>
    </div>
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
    <div class="phone-list-item-btm">
        <radio-component></radio-component>
        <div class="list-item-title">
            <i class="list-item-heart-icon"
                :class="heartActive ? 'v-icon-heart' : 'v-icon-heart1'"
                @click="heartActive = !heartActive"></i>
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
<style scoped lang="scss">
.phone-list-item-btm {
    display: none;
    flex-direction: column;
    align-items: center;
}
.list-item- {
  &wrap {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 33.3%;
    // height: 260px;
    min-width: 150px;
  }
  &top-icon {
      text-align: right;
      font-size: 26px;
      height: 40px;
  }
  &btm {
      padding: 0 25px;
  }
  &radio-wrap {
    display: flex;
    justify-content: space-between;
  }
  &heart-icon {
    color: red;
  }
  &title {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 20px;
  }
  &button {
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
    &:active {
      background: #21baff;
      color: #fff;
    }
  }
}
.img-wrap {
  padding: 10px 0 20px;
  & > img {
    width: 100%;
    height: 80px;
    object-fit: contain;
    display: block;
  }
  & > .hover {
    display: none;
  }
  &:hover {
    & > .normal {
      display: none;
    }
    &> .hover {
      display: block;
    }
  }
}
@media screen and (max-width: 768px) {
    .list-item-wrap {
        width: 100%;
    }
    .list-item-btm {
        display: none;
    }
    .phone-list-item-btm {
        display: flex;
    }
}
</style>