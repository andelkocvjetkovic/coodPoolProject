<template>
  <section>
    <form
      class="mt-7 flex gap-y-6 flex-col lg:mt-0 lg:max-w-[450px] lg:mx-auto"
      @submit.prevent="addNewCard"
    >
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
        class="sm:w-1/2 sm:self-end lg:w-auto lg:absolute bottom-0 right-0"
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

<style></style>
