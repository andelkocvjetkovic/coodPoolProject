<template>
  <section class="credit-card-page">
    <form class="credit-card-page__form" @submit.prevent="addNewCard">
      <AppInputWrapper lab-for="Card-number">
        <AppInput id="Card-number" v-model.trim="card.cardNumber" type="text" />
      </AppInputWrapper>
      <div class="sm:flex sm:gap-x-2">
        <AppInputWrapper
          class="sm:w-1/3 sm:flex-grow"
          lab-for="Expiration-month"
        >
          <AppInput
            id="Expiration-month"
            v-model.number="card.expMonth"
            type="text"
          />
        </AppInputWrapper>
        <AppInputWrapper
          class="sm:w-1/3 sm:flex-grow"
          lab-for="Expiration-year"
        >
          <AppInput
            id="Expiration-year"
            v-model.number="card.expYear"
            type="text"
          />
        </AppInputWrapper>
      </div>
      <AppButtonTeal
        class="credit-card-page__form__button"
        type="submit"
      ></AppButtonTeal>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      card: {
        cardNumber: "",
        expMonth: "",
        expYear: "",
        isActive: "",
      },
    };
  },
  methods: {
    addNewCard() {
      return false;
    },
  },
};
</script>
<style lang="scss">
.credit-card-page {
  &__form {
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    @include respond-to("lg") {
      margin-top: 0;
      max-width: 28rem;
      margin: 0 auto;
    }

    &__button {
      /*
    sm:w-1/2 sm:self-end lg:w-auto lg:absolute bottom-0 right-0 */
      @include respond-to("sm") {
        width: 50%;
        align-self: flex-end;
      }
      @include respond-to("lg") {
        width: auto;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
