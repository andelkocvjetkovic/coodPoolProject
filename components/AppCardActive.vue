<template>
  <AppButtonTeal class="flex items-center justify-between group sm:gap-x-1">
    <CreditCardWhite />
    <span class="text-sm lg:text-xs xl:text-base font-bold">{{
      cardNumber
    }}</span>
    <AppChecked />
  </AppButtonTeal>
</template>

<script>
import CreditCardWhite from "~/assets/svg/CreditCardWhite.svg";
export default {
  components: {
    CreditCardWhite,
  },
  props: {
    cardNumber: {
      type: String,
      default: "1234 5678 9012 3456",
    },
  },
};
</script>

<style></style>
