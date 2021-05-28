<template>
  <AppButtonTeal class="flex items-center group">
    <CreditCardWhite />
    <span class="text-base font-bold ml-[9px]">{{ cardNumber }}</span>
    <AppChecked class="ml-[30px]" />
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
