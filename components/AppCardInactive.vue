<template>
  <button class="card-inactive">
    <CreditCardBlue />
    <span class="card-inactive__card-number">{{ cardNumber }}</span>
    <span class="card-inactive__circle"> </span>
  </button>
</template>

<script>
import CreditCardBlue from "~/assets/svg/CreditCardBlue.svg";
export default {
  components: {
    CreditCardBlue,
  },
  props: {
    cardNumber: {
      type: String,
      default: "1234 5678 9012 3456",
    },
  },
};
</script>

<style lang="scss">
.card-inactive {
  @extend %button;
  @extend %card-status;
  background-color: $blue-lightest;

  &:active {
    background-color: rgba($color: $blue-dark, $alpha: 0.6);
  }

  @include respond-to("lg") {
    &:hover {
      background-color: $blue-dark;
    }
    &:active {
      background-color: rgba($color: $blue-dark, $alpha: 0.6);
    }
  }
  @include respond-to("sm") {
    column-gap: 0.25rem;
  }
  &:active {
    background: rgba($color: $blue, $alpha: 0.4);
  }
  @include respond-to("lg") {
    &:hover {
      background: $blue-light;
    }
    &:hover &__circle {
      background: $blue;
    }
    &:active {
      background: rgba($color: $blue, $alpha: 0.4);
    }
  }
  &__card-number {
    @extend %text-sm;
    color: $blue-darkest;
    @include respond-to("xl") {
      @include text-base;
    }
  }
  &__circle {
    background-color: $blue-light;
    width: 26px;
    height: 26px;
    border-radius: 9999px;
  }
}
</style>
