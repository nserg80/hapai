<template>
  <div v-if="isModalOpen"
       class="modal" @click.self="closeModal">
    <div class="modal__dialog">
      <div class="modal__content">
        <div class="modal__header">
          <img class="modal__logo" src="@/assets/images/logo.svg"
               alt="logo">
          <h5 v-if="title" class="modal__title">{{ title }}</h5>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
        <div class="modal__footer">
          <button v-focus type="button"
                  class="btn btn_primary w-100p"
                  @click="closeModal">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const { isModalOpen, title } = defineProps({
  isModalOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
  }
})

const emits = defineEmits(['close'])

const closeModal = () => {
  emits('close')
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(52, 52, 66, 0.7);
  padding-top: 60px;

  &__dialog {
    max-width: 500px;
    margin: 0 auto;
    padding: 16px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-height: calc(100vh - 60px);
  }

  &__header {
    text-align: center;
    transform: translateX(0);
    padding-bottom: 16px;
  }

  &__logo {
    display: block;
    margin: 0 auto;
  }

  &__title {
    margin: 16px 0 0;
    font-size: 18px;
    line-height: 21px;
  }

  &__content {
    background-color: #fefefe;
    padding: 16px 24px;
    border-radius: 16px;
    box-shadow: 0px 4px 15px rgba(22, 25, 31, 0.1);
    overflow: auto;
  }

  &__footer {
    text-align: center;
    padding-top: 24px;
  }
}
</style>
