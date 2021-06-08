<template>
  <section class="payment-plan-page">
    <div class="payment-plan-page__wrapper">
      <FeatureItem
        v-for="feature in $options.featuresList"
        :key="feature.header"
        :feature-item="feature"
        class="payment-plan-page__wrapper__item"
      />
    </div>
    <AppButtonTeal class="payment-plan-page__button" />
  </section>
</template>

<script>
import { featuresList } from "~/static/mockData.js";
export default {
  featuresList,
};
</script>

<style lang="scss">
.payment-plan-page {
  margin-top: 1rem;
  @include respond-to("lg") {
    margin: 0;
  }
  &__wrapper {
    /*
          flex flex-col
        gap-y-[14px]
        sm:flex-row
        sm:gap-x-[14px]
        lg:max-w-[589px]
        lg:mx-auto */

    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
    align-items: center;
    @include respond-to("sm") {
      align-items: stretch;
      flex-direction: row;
      column-gap: 0.875rem;
    }
    @include respond-to("lg") {
      max-width: 36.8rem;
      margin: 0 auto;
    }

    &__item {
      width: 70%;

      @include respond-to("xs") {
        flex-basis: 50%;
      }
      @include respond-to("sm") {
        flex: 1 1 33%;
        margin: 0;
      }
    }
  }
  &__button {
    /*           mt-8
        relative
        left-full
        transform
        -translate-x-full
        lg:absolute
        lg:mt-0
        lg:left-auto
        lg:translate-x-0
        lg:right-0
        lg:bottom-0
     */
    margin-top: 2rem;
    position: relative;
    left: 50%;

    transform: translateX(-50%);
    @include respond-to("sm") {
      left: 100%;
      transform: translateX(-100%);
    }
    @include respond-to("lg") {
      transform: translateX(-0%);
      left: unset;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
