<template>
  <section class="confirm-cancel-page">
    <section class="confirm-cancel-page__title">
      <h1 class="confirm-cancel-page__title__header">
        We are sorry to see you go
      </h1>
      <p class="confirm-cancel-page__title__text">
        Before you unsubscribe consider changing the payment plan. If you are
        uncertain which plan best suites your business do not hesitate to
        contact our support and we will do our best to assist you in choosing
        the right plan for you.
      </p>
    </section>
    <section class="confirm-cancel-page__cards">
      <h2 class="confirm-cancel-page__cards__header">OUR JOURNEY SO FAR</h2>
      <div class="confirm-cancel-page__cards__body">
        <p v-for="(item, i) in $options.ourJourney" :key="i" class="blue-card">
          <span class="text-4xl font-bold">{{ item.description }}</span>
          <span class="text-base uppercase">{{ item.name }}</span>
        </p>
      </div>
    </section>
    <section class="mt-[88px] text-center">
      <h2 class="text-2xl font-bold">Are you sure you want to unsubscribe?</h2>
      <p class="text-base mt-2">
        If you cancel your subscription you won’t be able to use any of the
        platform features and your payments will be discontinued.
      </p>
      <p class="flex justify-center gap-[9px] mt-6">
        <AppButonTransparent @click="goBack">Cancel</AppButonTransparent>
        <AppNuxtLinkTransparent to="/cancelsubs"
          >Confirm</AppNuxtLinkTransparent
        >
      </p>
    </section>
  </section>
</template>

<script>
import { ourJourney } from "~/static/mockData.js";
export default {
  ourJourney,
  middleware({ store, route, error }) {
    if (!route.params.slug) {
      return error({ statusCode: 404 });
    } else {
      const userHaveFeature = store.state.user.selectedFeature.includes(
        route.params.slug
      );
      if (!userHaveFeature) {
        return error({ statusCode: 404 });
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.confirm-cancel-page {
  margin-top: 2.375rem;

  @include respond-to("sm") {
    max-width: 29.4rem;
    margin: 0 auto;
  }
  @include respond-to("lg") {
    margin-top: 0;
  }

  &__title {
    text-align: center;
    &__header {
      @extend %text-2xl;
      font-weight: bold;
    }
    &__text {
      @extend %text-base;
      margin-top: 0.5rem;

      @include respond-to("sm") {
        padding: 0.75rem;
      }
    }
  }
  &__cards {
    margin-top: 5.5rem;
    &__header {
      @extend %text-lg;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }
    &__body {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      column-gap: 0.5rem;

      @include respond-to("sm") {
        flex-direction: row;
        row-gap: 0.5rem;
      }
    }
  }
}

.blue-card {
  background-color: $blue;
  color: $white;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;

  @include respond-to("sm") {
    flex: 1 1 33.33%;
  }
}
</style>
