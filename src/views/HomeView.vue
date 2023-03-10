<template>
  <div class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__title">Найчастіше купують</h1>
      <div class="slider-arrows">
        <span ref="prevBtn"
              class="slider-arrows__arrow left swiper-button-prev">
          <img src="@/assets/images/arrow-left.svg"
               alt="arrow">
        </span>
        <span ref="nextBtn"
              class="slider-arrows__arrow right swiper-button-next">
          <img src="@/assets/images/arrow-left.svg"
               alt="arrow">
        </span>
      </div>
    </header>

    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(slide, index) in slides"
             :key="index">
          <CardComponent :slide="slide" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="hubber-block">
      <img class="hubber-block__logo" src="@/assets/images/logo-hubber.png"
           alt="HUBBER">
      <p class="m-0">Опис товару на його характеристики розміщено платформою HUBBER</p>
    </div>

    <ul class="menu">
      <li @click="showModal = true" class="menu__item">
        <img class="menu__ico" src="@/assets/images/ico-catalog.svg" alt="catalog">
        Каталог
      </li>
      <li @click="showModal = true" class="menu__item">
        <img class="menu__ico" src="@/assets/images/ico-profile.svg" alt="profile">
        Кабінет
      </li>
    </ul>

    <ModalComponent :isModalOpen="showModal"
                    @close="showModal = false">
      <p>Соцмережа постачальників та покупців для покупки товарів та обміну відгуками:</p>
      <ul>
        <li>1 000 000+ доступних товарів в каталозі</li>
        <li>пошук серед товарів у наявності</li>
        <li>перевірені постачальники товарів в Україні.</li>
      </ul>
      <p class="m-0">Залиште ваш відгук</p>
      <a href="https://forms.gle/CKuK2yKpvPXbTLVQ9">https://forms.gle/CKuK2yKpvPXbTLVQ9</a>
    </ModalComponent>
  </div>
</template>



<script setup>
import axios from 'axios';
import { ref, onMounted, onUnmounted } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

import Swiper, { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const showModal = ref(false);
let swiper = ref(null);
let slides = ref([]);

function initSwiper() {
  initSwiperRows();
}

function destroySwiper() {
  swiper.destroy();
}

const initSwiperRows = () => {
  setTimeout(() => {
    const cardParrentHeight = document.querySelectorAll('.swiper')[0]?.clientHeight
    const cardHeight = document.querySelectorAll('.swiper-slide')[0]?.clientHeight

    if (cardParrentHeight > (cardHeight * 2)) {
      swiper = new Swiper('.swiper', swiperOptions2.value);
      // console.log(cardParrentHeight, cardHeight*2, cardParrentHeight > (cardHeight * 2));
    } else {
      swiper = new Swiper('.swiper', swiperOptions.value);
      // console.log(cardParrentHeight, cardHeight*2, cardParrentHeight > (cardHeight * 2));
    }
  }, 1);
};

const onResize = () => {
  console.log('onResize');
  destroySwiper()
  initSwiper()
};

const swiperOptions = ref({
  modules: [Grid, Pagination, Navigation],
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 8,
  grid: {
    rows: 1,
    fill: "row"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }
})

const swiperOptions2 = ref({
  modules: [Grid, Pagination, Navigation],
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 8,
  grid: {
    rows: 2,
    fill: "row"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }
})


onMounted(() => {
  axios.get('responses/get_drugs.json').then(response => {
    slides.value = response.data;
    initSwiper();
  });
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>


<style scoped lang="scss">
.home-page {
  min-height: calc(100vh - 60px);
  background: url('@/assets/images/bg-home.jpg') 50% 0/cover no-repeat;
  padding: 16px;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 16px;
  }

  &__title {
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    margin: 0;
  }
}

.slider-arrows {
  display: flex;
  align-items: center;
  gap: 4px;

  &__arrow {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff;
    filter: drop-shadow(0px 4px 15px rgba(22, 25, 31, 0.1));
    cursor: pointer;

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }

    &.right {
      img {
        transform: rotate(180deg);
      }
    }
  }
}

.modal {

  p,
  ul {
    margin: 0 0 8px;
  }
}

.swiper {
  flex-grow: 1;
  margin: 0;
  margin-bottom: 16px;
}

.hubber-block {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  display: flex;

  &__logo {
    width: 56px;
    margin-right: 10px;
    flex-shrink: 0;
    align-self: flex-start;
  }
}

.menu {
  margin: 0 -8px;
  padding: 8px 14px;
  list-style: none;
  display: flex;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(22, 25, 31, 0.1);
  border-radius: 60px;

  &__item {
    padding: 10px;
    width: 50%;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:not(:first-child) {
      border-left: 1px solid #E5EAEF;
    }
  }

  &__ico {
    margin-right: 4px;
  }
}
</style>

<style>
.swiper-pagination {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}

.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background: #fff;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #3985C6;
  width: 8px;
  height: 8px;
}

.swiper .card {
  height: 100%;
}
</style>
