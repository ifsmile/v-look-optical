<template>
    <div class="header-selector-wrap">
        <div v-for="(item, index) in selectors"
            :key="index"
            class="header-selector-item"
            :class="{active: item.active}">
            <span>{{item.name}}</span>
            <i class="v-icon-arrow-down"></i>
        </div>
        <div class="header-selector-item active">Clear filters</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectors: [{
                name: 'Gender',
                active: true
            }, {
                name: 'Brands'
            }, {
                name: 'Size'
            }, {
                name: 'Shape'
            }, {
                name: 'Rim'
            }, {
                name: 'Material'
            }, {
                name: 'Color'
            }, {
                name: 'Feature'
            }]
        }
    }
}
</script>
<style lang="scss">
.header-selector- {
    &wrap {
        padding: 0 13%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 1px 2px 1px #ccc;
    }
    &item {
        padding: 10px;
        white-space: nowrap;
        cursor: pointer;
        &.active {
            color: orange;
        }
    }
}
@media screen and (max-width: 1200px) and (min-width: 976px) {
    .header-selector-wrap {
        padding: 0 12.5%;
    }
}
@media screen and (max-width: 976px) and (min-width: 768px) {
    .header-selector-wrap {
        padding: 0 10%;
    }
}
@media screen and (max-width: 768px) {
    .header-selector-wrap {
        display: none;
    }
}
</style>