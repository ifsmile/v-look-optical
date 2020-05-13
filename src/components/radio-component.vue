<template>
  <div class="wrap">
      <div class="btn-item-wrap"
        v-for="(item, index) in radioBtns"
        :key="item.id"
        :style="{borderColor: item.color}"
        :class="activeIndex === index ? 'active' : ''"
        @click="activeIndex = index">
        <div class="btn-item-inner"
          :style="{backgroundColor: item.color}"></div>
      </div>
  </div>
</template>
<script>
export default {
    props: {
        radioBtns: {
            type: Array,
            default () {
                return [{
                    id: 111,
                    color: 'red'
                }, {
                    id: 222,
                    color: 'blue'
                }, {
                    id: 333,
                    color: 'black'
                }]
            }
        }
    },
    data() {
        return {
            activeIndex: 0
        }
    }
}
</script>
<style scoped>
.wrap {
  display: flex;
}
.btn-item-wrap {
    width: 16px;
    height: 16px;
    padding: 2px;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: 4px;
    border-width: 0;
}
.btn-item-wrap.active {
    border-width: 1px;
}
.btn-item-inner  {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #000;
}
</style>
