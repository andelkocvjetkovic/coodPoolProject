<template>
  <button class="card-active">
    <CreditCardWhite />
    <span class="card-active__card-number">{{ cardNumber }}</span>
    <span class="card-active__circle"><CheckIcon /></span>
  </button>
</template>

<script>
import CreditCardWhite from "~/assets/svg/CreditCardWhite.svg";
import CheckIcon from "~/assets/svg/CheckIcon.svg";
export default {
  components: {
    CreditCardWhite,
    CheckIcon,
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
.card-active {
  @extend %button;
  @extend %card-status;

  background: $teal-light;
  color: $white;

  &:active {
    background-color: rgba($color: $teal-light, $alpha: 0.6);
  }

  @include respond-to("lg") {
    &:hover {
      background-color: $teal-dark;
    }
    &:active {
      background-color: rgba($color: $teal-light, $alpha: 0.6);
    }
  }
  @include respond-to("sm") {
    column-gap: 0.25rem;
  }
  @include respond-to("lg") {
    &:hover &__circle {
      background: $teal-light;
    }
  }

  &__card-number {
    font-weight: bold;

    @extend %text-sm;
    @include respond-to("lg") {
      @include text-sm;
    }
    @include respond-to("xl") {
      @include text-base;
    }
  }
  &__circle {
    background: $teal-dark;
    width: 26px;
    height: 26px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
