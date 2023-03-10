<template>
  <div class="checkout-page">
    <router-link to="/"
                 class="back-link">
      <img class="back-link__arrow"
           src="@/assets/images/arrow-back.svg"
           alt="back">
      Кошик
    </router-link>
    <h1 class="checkout-page__title">Оформлення замовлення</h1>
    <h2 class="checkout-page__subtitle">Контактні дані</h2>

    <form class="form">
      <div class="form__group">
        <label for="name"
               class="form__label">Ім’я <span class="text-danger">*</span></label>
        <input v-model.lazy="v$.firstName.$model"
               id="name"
               :class="{ error: v$.firstName.$error }"
               class="form__field"
               type="text"
               placeholder="Введіть ваше ім’я">
      </div>

      <div class="form__group">
        <label for="last-name"
               class="form__label">Прізвище <span class="text-danger">*</span></label>
        <input v-model.lazy="v$.lastName.$model"
               id="last-name"
               :class="{ error: v$.lastName.$error }"
               class="form__field"
               type="text"
               placeholder="Введіть ваше прізвище">
      </div>

      <div class="form__group">
        <label for="tel"
               class="form__label">Номер телефону <span class="text-danger">*</span></label>
        <input  v-model.lazy="v$.phone.$model"
               id="tel"
               :class="{ error: v$.phone.$error }"
               class="form__field"
               type="tel"
               placeholder="Введіть ваш номер телефону">
      </div>

      <div class="form__group">
        <label for="email"
               class="form__label">Email</label>
        <input id="email"
               class="form__field"
               type="email"
               placeholder="Введіть ваш email">
      </div>

      <div class="form__group">
        <label for="comment"
               class="form__label">Коментар</label>
        <textarea class="form__field"
                  id="comment"
                  placeholder="Напишіть свій коментар до замовлення"
                  rows="5"></textarea>
      </div>
    </form>

    <ProductsComponent v-if="!loading" />
    <LoaderComponent v-else />

    <footer class="checkout-page__footer">
      <div class="total-block">
        <p class="total-block__row">
          Всього до сплати: 
          <strong class="total-block__value">24 <span class="total-block__currency">грн</span></strong>
        </p>
        <p class="total-block__quantity">В кошику 3 товари</p>
      </div>
      <button :disabled="v$.$invalid" @click="approve" class="btn btn_primary w-100p">Підтверджую замовлення</button>
    </footer>
    <ModalComponent :isModalOpen="showModal"
                    @close="handleCloseModal">
      <span class="error-message">{{ errorMessage }}</span>
    </ModalComponent>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router'
import LoaderComponent from '@/components/LoaderComponent.vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import { nameValidator, phoneValidator } from '@/validators';

const router = useRouter()
const loading = ref(true);
const showModal = ref(false);
const errorMessage = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000);
});

const state = reactive({
  firstName: '',
  lastName: '',
  phone: ''
})
const rules = {
  firstName: {
    required,
    nameValidator,
    maxLength: maxLength(20),
  },
  lastName: {
    required,
    nameValidator,
    maxLength: maxLength(20),
  },
  phone: {
    required,
    phoneValidator
  }
}

const v$ = useVuelidate(rules, state)

const handleCloseModal = () => {
  showModal.value = false;
}

const approve = () => {
  router?.push('/');
}

watch(v$, () => {
  if(v$.value.$errors.length) {
    showModal.value = true;
    let errors = [];
    v$.value.$errors?.forEach(error => {
      error.$validator == 'nameValidator' ? errors.push(`Поле ${error.$property} може містити тільки кирилічні символи, або дефіс всередині слів`)
      : error.$validator == 'maxLength' ? errors.push(`Довжина поля ${error.$property} може бути не більш ніж ${error.$params.max} символів`)
      : error.$validator == 'required' ? errors.push(`Поле ${error.$property} обов'язкове`)
      : error.$validator == 'phoneValidator' ? errors.push(`Введіть корректний номер українськго оператора`)
      : ''
      
      return errors
    })
    errorMessage.value = errors.join('. ')
  }
})
</script>

<style scoped lang="scss">
.checkout-page {
  padding: 16px;

  &__title {
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;
    margin: 0 0 24px;
  }

  &__subtitle {
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
    margin: 0 0 16px;
  }

  &__footer {
    background: #fff;
    box-shadow: 0px -4px 15px rgba(22, 25, 31, 0.1);
    padding: 16px;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.form {
  &__group {
    margin-bottom: 16px;
  }

  &__label {
    font-weight: 700;
    display: inline-block;
    margin-bottom: 8px;
  }

  &__field {
    display: block;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E5EAEF;
    border-radius: 8px;
    padding: 12px 16px;

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

    &.error {
      border-color: #FF1D1D;
    }
  }

  textarea {
    resize: none;
  }
}

.total-block {
  margin-bottom: 16px;

  &__row{
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    margin: 0 0 5px;
  }

  &__value {
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
  }

  &__currency {
    font-weight: 800;
    font-size: 14px;
    line-height: 120%;
  }

  &__quantity {
    font-weight: 600;
    color: #8592AA;
    margin: 0;
  }
}

.error-message {
  display: block;
  text-align: center;
}

.test {
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  border: 3px solid #000;
  padding: 10px;
  background: #fff;
  font-size: 11px;
}

</style>
