<template>
    <div>
        <div class="detail-breadcrumb">
            <span class="active">Prev</span>
            <span>></span>
            <span>Troy</span>
        </div>
        <div class="detail-body flex">
            <div class="detail-left-box flex-y">
                <div class="detail-try-on-btn-wrap">
                    <button class="detail-try-on-btn">TRY ON</button>
                </div>
                <img class="detail-banner"
                    src="https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png" alt="">
                <div class="flex-between-middle detail-banner-btm">
                    <div></div>
                    <radio-component class="detail-radio-component"></radio-component>
                    <button class="detail-vr-btn flex-center-middle"><i class="v-icon-vr detail-vr-btn-icon"></i>VR VIEWING</button>
                </div>
            </div>
            <div class="detail-right-box">
                <div class="detail-coupons-wrap flex-between-middle">
                    <span class="detail-coupons-tag">COUPONS</span>
                    <span class="detail-coupons-desc">$5 OFF On First Order</span>
                    <span class="detail-coupons-btn">GET</span>
                </div>
                <div class="detail-right-body">
                    <div class="detail-reverse-box">
                        <p class="detail-desc">Square & Wayfarer Glasses</p>
                        <h3 class="detail-title">Troy</h3>
                    </div>
                    <p class="detail-price">$ 24.57</p>
                    <div class="detail-reverse-box detail-color-box">
                        <div class="detail-color">
                            <span class="detail-color-label">Color:</span>
                            <span>Gray</span>
                        </div>
                        <radio-component  class="detail-size"></radio-component>
                    </div>
                    <div class="detail-size">
                        <p class="detail-size-label">Size:</p>
                        <div class="flex-middle">
                            <div class="detail-size-no">L</div>
                            <span class="detail-size-guide">Frame Size Guide</span>
                        </div>
                    </div>
                    <div class="flex-between-middle detail-reverse-box">
                        <button class="detail-try-on-btn detail-buy-btn flex-1">ADD LENSES</button>
                        <div class="detail-vr-btn-wrap">
                            <button class="detail-vr-btn mobile-end flex-center-middle">360°</button>
                            <i class="v-icon-heart1 detail-star-btn"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-left-box flex detail-img-wrap">
                <img :src="img1" alt="" class="detail-img-item">
                <img :src="img2" alt="" class="detail-img-item">
            </div>
            <div class="detail-right-box">
                <div class="detail-attention-row flex-middle">
                    <i class="v-icon-blchecked"></i>
                    <p>Free Scrach-resistant Lens Coating Included</p>
                </div>
                <div class="detail-attention-row flex-middle">
                    <i class="v-icon-wangfan"></i>
                    <p>Free Scrach-resistant Lens Coating Included</p>
                </div>
                <div class="detail-attention-row flex-middle">
                    <i class="v-icon-banshou"></i>
                    <p>3-month Warranty</p>&nbsp;&nbsp;
                    <span class="global-link">View more</span>
                </div>
                <div class="detail-attention-row flex-middle">
                    <i class="v-icon-Moresecure"></i>
                    <span class="global-link">Safe and Carefree Shopping Guarantee</span>
                </div>
                <div class="detail-tips flex-between-middle">
                    <div>
                        <i class="v-icon-secureshopping detail-tips-icon"></i>
                        <span class="detail-tips-text">Secure Checkout</span>
                    </div>
                    <div>
                        <i class="v-icon-phone detail-tips-icon"></i>
                        <span class="detail-tips-text">Secure Checkout</span>
                    </div>
                    <div>
                        <i class="v-icon-car detail-tips-icon"></i>
                        <span class="detail-tips-text">Secure Checkout</span>
                    </div>
                </div>
                <div class="detail-share-wrap flex">
                    <span class="flex-1 detail-share-label">SHARE WITH:</span>
                    <i class="v-icon-lianshu"></i>
                    <i class="v-icon-tuite"></i>
                </div>
                <div class="detail-description-wrap">
                    <div class="flex-between-middle">
                        <b>Description:</b>
                        <i class="v-icon-arrow-down"></i>
                    </div>
                    <p class="detail-description-text">
                        Troy is glamorous mudius-sized square wayfarer prescription sunglasses Troy is glamorous mudius-sized square wayfarer prescription sunglasses
                        Troy is glamorous mudius-sized square wayfarer prescription sunglasses Troy is glamorous mudius-sized square wayfarer prescription sunglasses
                        Troy is glamorous mudius-sized square wayfarer prescription sunglasses Troy is glamorous mudius-sized square wayfarer prescription sunglasses
                    </p>
                </div>
                <div class="detail-description-wrap">
                    <div class="flex-between-middle">
                        <b>SPECIFICATIONS:</b>
                        <i class="v-icon-arrow-down"></i>
                    </div>
                    <p class="detail-description-text">PD Range: My:53~37 Hyper: 53~64</p>
                    <p class="detail-description-text">PD Range: My:53~37 Hyper: 53~64</p>
                    <p class="detail-description-text">PD Range: My:53~37 Hyper: 53~64</p>
                    <p class="detail-description-text">PD Range: My:53~37 Hyper: 53~64</p>
                </div>
            </div>
            <div class="detail-left-box">
               <div class="detail-tabs-wrap flex">
                   <span class="detail-tabs-item active">DETAILS</span>
                   <span class="detail-tabs-item">REVIEWS</span>
                   <span class="detail-tabs-item">PACKAGE</span>
               </div>
               <img class="detail-img-size" :src="imgSize" alt="">
            </div>
            <div class="detail-footer-wrap">
                <h2 class="detail-footer-title">YOU MAY ALSE LIKE</h2>
                <div class="flex-around-middle detail-footer-item-wrap">
                    <div class="detail-footer-item">
                        <img src="https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png" alt="">
                        <p>Notting Hill $32</p>
                    </div>
                    <div class="detail-footer-item">
                        <img src="https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png" alt="">
                        <p>Notting Hill $32</p>
                    </div>
                    <div class="detail-footer-item">
                        <img src="https://d11mqqjj4dkdrj.cloudfront.net/media/frame/c0c566ada875486aad34e2645ace1e85.png" alt="">
                        <p>Notting Hill $32</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RadioComponent from 'components/radio-component'
export default {
    components: { RadioComponent },
    data() {
        return {
            img1: require('assets/detail-img-1.jpg'),
            img2: require('assets/detail-img-2.jpg'),
            imgSize: require('assets/detail-size.jpg')
        }
    }
}
</script>
<style lang="scss" scoped>
.detail- {
    &breadcrumb {
        padding: 10px 22%;
        box-shadow: 0 1px 2px 1px #ddd;
        background: #fafafa;
        & > .active {
            color: #68aaff;
        }
    }
    &body {
        padding: 20px 12%;
        flex-wrap: wrap;
    }
    &left-box {
        width: 62%;
        padding: 10px;
    }
    &right-box {
        width: 26%;
        padding: 0 20px;
        margin-left: 8%;
    }
    &try-on-btn {
        padding: 8px 22px;
        border-radius: 8px;
        border: 0;
        background: #68aaff;
        color: #fff;
    }
    &vr-btn {
        border-radius: 8px;
        border: 1px solid #888;
        color: #888;
        background: #fff;
        padding: 8px 30px;
        font-size: 16px;
        font-weight: 600;
        &-icon {
            font-size: 24px;
            margin-right: 10px;
            font-weight: normal;
        }
        &.mobile-end {
            display: none;
        }
    }
    &banner {
        margin: 30px 0;
        object-fit: contain;
        height: 280px;
    }
    &radio-component {
        justify-content: center;
    }
    &coupons- {
        &wrap {
            padding: 8px 10px;
            background: rgba(202, 236, 255, 0.3);
            font-size: 12px;
        }
        &tag {
            padding: 6px;
            background: linear-gradient(90deg, rgba(131, 235, 255, 1), rgba(110, 175, 255, 1));
            border-radius: 8px;
            color: #fff;
        }
        &desc {
            font-weight: 600;
            padding: 0 20px;
        }
        &btn {
            color: #68aaff;
            font-weight: 600;
        }
    }
    &right-body {
        padding-left: 10px;
    }
    &desc {
        color: #666;
        font-size: 18px;
        margin: 4px 0;
    }
    &title {
        font-size: 36px;
        margin: 0;
    }
    &price {
        font-size: 24px;
    }
    &color {
        border-top: 1px solid #ddd;
        margin-top: 12px;
        padding: 12px 0;
        font-size: 13px;
        &-label {
            color: #aaa;
            margin-right: 4px;
        }
    }
    &size {
        padding: 2px 0 12px;
        &-label {
            margin-bottom: 10px;
        }
        &-no {
            background: #000;
            color: #fff;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            font-size: 18px;
            margin-right: 10px;
        }
        &-guide {
            color: #68aaff;
        }
    }
    &buy-btn {
        font-size: 18px;
        padding: 10px 22px;
    }
    &star-btn {
        font-size: 30px;
        padding: 0 20px;
        color: #555;
    }
    &img- {
        &item {
            width: 50%;
            padding: 20px;
            object-fit: contain;
        }
    }
    &attention-row {
        margin-bottom: 10px;
        & > i {
            font-size: 16px;
            margin-right: 6px;
            color: #aaa;
        }
        & > p {
            font-size: 13px;
        }
        & > .global-link {
            font-size: 13px;
        }
    }
    &tips {
        padding: 20px 0;
        &-icon {
            font-size: 14px;
        }
        &-text {
            font-size: 10px;
            transform: scale(.9);
        }
    }
    &share- {
        &wrap {
            border-bottom: 1px solid #ddd;
            & .v-icon-lianshu {
                margin-right: 10px;
            }
        }
        &label {
            border-top: 1px solid #ddd;
            padding: 8px 0;
            font-weight: bold;
            font-size: 14px;
        }
    }
    &description {
        &-wrap {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        &-text {
            font-size: 12px;
            line-height: 20px;
        }
    }
    &tabs- {
        &wrap {
            width: 100%;
            background: #f5f5f5;
            margin-top: 40px;
        }
        &item {
            padding: 20px 40px;
            font-size: 14px;
            &.active {
                border-bottom: 1px solid #555;
            }
        }
    }
    &img-size {
        max-width: 100%;
    }
    &footer- {
        &wrap {
            width: 100%;
        }
        &title {
            text-align: center;
            font-size: 30px;
            margin-top: 50px;
            font-weight: 500;
        }
        &item {
            width: 22%;
            text-align: center;
            &-wrap {
                margin: 50px 0;
            }
            & > img {
                width: 100%;
            }
            & > p {
                margin: 30px 0;
                font-weight: 500;
            }
        }
    }
}
@media screen and (max-width: 1300px) and (min-width: 1000px) {
    .detail- {
        &body {
            padding: 20px 5%;
        }
        &left-box {
            width: 64%;
        }
        &right-box {
            width: 28%;
            margin-left: 4%;
        }
    }
}
@media screen and (max-width: 1000px) {
    .detail- {
        &body {
            padding: 20px 1%;
        }
        &left-box {
            width: 64%;
        }
        &right-box {
            width: 30%;
            margin-left: 2%;
        }
    }
}
@media screen and (max-width: 768px) {
    .detail- {
        &body {
            padding: 0;
        }
        &left-box {
            width: 100%;
            padding: 10px 0;
        }
        &right-box {
            width: 100%;
            margin-left: 0;
            padding: 10px;
        }
        &right-body {
            margin: 0 10px;
            padding: 0;
        }
        &breadcrumb {
            padding-left: 4%;
            padding-right: 4%;
        }
        &try-on-btn {
            padding: 5px 20px;
            border-radius: 6px;
            &-wrap {
                text-align: right;
            }
        }
        &banner {
            margin: 4px 0;
            &-btm {
                flex-direction: column;
            }
        }
        &vr-btn {
            display: none;
            width: 100%;
            &.mobile-end {
                display: block;
                border-color: #68aaff;
            }
            &-wrap {
                display: flex;
                align-items: center;
                width: 100%;
                margin-bottom: 10px;
            }
        }
        &star-btn {
            // border: 1px silid #555;
            // padding: 4px;
            // margin: 0 10px;
        }
        &buy-btn {
            width: 100%;
            padding: 10px 20px;
        }
        &coupons-desc {
            font-size: 16px;
        }
        &reverse-box {
            display: flex;
            flex-direction: column-reverse;
        }
        &desc,
        &title,
        &price {
            text-align: center;
        }
        &title {
            margin-top: 20px;
        }
        &desc {
            margin: 10px 0;
        }
        &color {
            border-top: 0;
            margin-top: 0;
            padding: 2px;
            &-box {
                align-items: center;
                padding-top: 20px;
            }
        }
        &size {
            display: flex;
            align-items: center;
            justify-content: center;
            &-label {
                margin-bottom: 0;
            }
            &-no {
                background: #fff;
                color: #555;
                margin-right: 0;
            }
            &-guide {
                text-decoration: underline;
                color: #ef5f3f;
            }
        }
        &img- {
            &wrap {
                flex-direction: column;
            }
            &item {
                width: 100%;
                padding: 0;
                margin-bottom: 10px;
            }
        }
        &footer-item {
            width: 77%;
            &-wrap {
                flex-direction: column;
                margin: 30px 0;
            }
        }
    }
}
</style>