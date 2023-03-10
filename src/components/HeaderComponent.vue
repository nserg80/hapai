<template>
  <header class="header"
          :class="{ 'only-logo': currentRoute == 'checkout' }">
    <router-link to="/">
      <img class="header__logo"
           src="@/assets/images/logo.svg"
           alt="logo">
    </router-link>

    <template v-if="currentRoute !== 'checkout'">
      <div class="search">
        <input class="search__field"
               type="search"
               placeholder="Пошук">
        <img class="search__ico"
             src="@/assets/images/ico-search.svg"
             alt="ico-search">
      </div>

      <router-link to="/checkout"
                   class="btn-cart">
        <span class="btn-cart__count">2</span>
        <img class="btn-cart__ico"
             src="@/assets/images/ico-cart.svg"
             alt="ico-cart">
      </router-link>
    </template>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const currentRoute = ref(route.name)

watch(() => {
  currentRoute.value = route.name
})
</script>


<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(22, 25, 31, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 16px;

  &.only-logo {
    justify-content: center;
  }

  &__logo {
    display: block;
    flex-shrink: 0;
  }

  .search {
    flex-grow: 1;
    width: 100%;
    margin: 0 8px;
    background: #fff;
    border: 1px solid #E5EAEF;
    border-radius: 30px;
    position: relative;

    &__field {
      border: none;
      background: none;
      width: 100%;
      line-height: 19px;
      color: #343442;
      height: 44px;
      padding: 8px 40px 8px 16px;

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        color: #8592AA;
      }

      &::-moz-placeholder {
        color: #8592AA;
        opacity: 1;
      }

      &:-moz-placeholder {
        color: #8592AA;
      }

      &:-ms-input-placeholder {
        color: #8592AA;
      }

      &::-ms-clear {
        display: none;
      }

      &::-webkit-search-cancel-button {
        display: none;
      }
    }

    &__ico {
      position: absolute;
      top: 10px;
      right: 16px;
    }
  }

  .btn-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #3985C6;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    position: relative;

    &__count {
      position: absolute;
      top: -5px;
      right: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      background: #F6D20B;
      border: 2px solid #FFFFFF;
      color: #343442;
      border-radius: 50%;
      font-weight: 700;
      line-height: 100%;
    }
  }
}
</style>
