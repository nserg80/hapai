<template>
  <div class="card">
    <img class="card__img" :src="slide?.img_src" :alt="slide?.title">
    <h3 class="card__title">{{ slide?.title }}</h3>
    
    <div class="card__buy-block">
      <div class="card__price-block">
        <span class="card__old-price">{{ slide?.old_price }}</span>
        <strong class="card__price">{{ slide?.price }}<span class="card__currency">грн</span></strong>
        <img v-if="slide?.in_cart" class="card__add-cart" src="@/assets/images/ico-add-cart.svg" alt="add to cart">
        <img v-if="!slide?.in_cart" class="card__add-cart" src="@/assets/images/ico-added-cart.svg" alt="add to cart">
      </div>

      <p v-if="slide?.avaible" class="card__avaible">Є в наявності</p>
      <p v-if="!slide?.avaible" class="card__avaible card__avaible_not">Немає в наявності</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { slide } = defineProps({
  slide: {
    type: Object,
    required: true
  },
})
</script>


<style scoped lang="scss">
.card {
  background: #fff;
  box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
  border-radius: 10px;
  padding: 10px 8px 16px;

  &__img {
    display: block;
    margin: 0 auto 8px;
    width: 100%;
    max-width: 200px;
    height: 120px;
    object-fit: cover;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin: 0 0 8px;
    height: 45px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__buy-block {
    position: relative;

  }

  &__price-block {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__price {
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    margin-top: 20px;
  }

  &__currency {
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
  }

  &__old-price {
    font-size: 12px;
    line-height: 120%;
    color: #8592AA;
    text-decoration: line-through;
    position: absolute;
    top: 0;
  }

  &__add-cart {
    
  }

  &__avaible {
    font-size: 12px;
    line-height: 120%;
    color: #1C9A3F;

    &_not {
      color: #8592AA;
    }
  }
}
</style>
