<template>
  <div class="products">
    <section class="products__section">
      <header class="products__header">
        <h3 class="products__section-title">Постачальник: <a href="#">Lorem Ipsum</a></h3>
      </header>
      <ul class="products__list">
        <li class="products__item">
          <div class="products__image-holder">
            <img class="products__image"
                 src="@/../public/img/drug01.png"
                 alt="">
          </div>
          <div class="products__item-content">
            <h4 class="products__item-title">Цитрамон-Дарниця табл. №10</h4>
            <div class="products__prive-row">
              <strong class="products__price">8.33 <span class="products__currency">грн</span></strong>products
              <span class="products__quantity">1 шт.</span>
            </div>
          </div>
        </li>
        <li class="products__item">
          <div class="products__image-holder">
            <img class="products__image"
                 src="@/../public/img/drug01.png"
                 alt="">
          </div>
          <div class="products__item-content">
            <h4 class="products__item-title">Цитрамон-Дарниця табл. №10</h4>
            <div class="products__prive-row">
              <strong class="products__price">8.33 <span class="products__currency">грн</span></strong>
              <span class="products__quantity">1 шт.</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="products__section">
      <header class="products__header">
        <h3 class="products__section-title">Постачальник: <a href="#">Lorem Ipsum</a></h3>
      </header>
      <ul class="products__list">
        <li class="products__item">
          <div class="products__image-holder">
            <img class="products__image"
                 src="@/../public/img/drug01.png"
                 alt="">
          </div>
          <div class="products__item-content">
            <h4 class="products__item-title">Цитрамон-Дарниця табл. №10</h4>
            <div class="products__prive-row">
              <strong class="products__price">8.33 <span class="products__currency">грн</span></strong>
              <span class="products__quantity">1 шт.</span>
            </div>
          </div>
        </li>
        <li class="products__item">
          <div class="products__image-holder">
            <img class="products__image"
                 src="@/../public/img/drug01.png"
                 alt="">
          </div>
          <div class="products__item-content">
            <h4 class="products__item-title">Цитрамон-Дарниця табл. №10</h4>
            <div class="products__prive-row">
              <strong class="products__price">8.33 <span class="products__currency">грн</span></strong>
              <span class="products__quantity">1 шт.</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>


<style scoped lang="scss">
.products {
  &__section {
    box-shadow: 0px 4px 15px rgba(22, 25, 31, 0.1);
    border-radius: 24px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__section-title {
    margin: 0;
    font-weight: 800;
    font-size: 14px;
    line-height: 120%;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__header {
    padding: 16px 16px 8px;
  }


  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    border-top: 1px solid #E5EAEF;
    padding: 16px;
  }

  &__image-holder {
    border: 1px solid #E5EAEF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 50px;
    padding: 3px;
    margin-right: 10px;
  }

  &__image {
    flex-shrink: 0;
    width: 100%;
    object-fit: cover;
  }

  &__item-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin: 0 0 8px;
  }

  &__price{
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    margin-right: 24px;
  }

  &__currency {
    font-size: 14px;
    line-height: 140%;
  }

  &__quantity {
    color: #8592AA;
  }
}
</style>
