<template>
  <AppButtonBlue
    class="
      flex
      items-center
      justify-between
      bg-blue-lightest
      sm:gap-x-1
      lg:hover:bg-blue-light
      group
    "
  >
    <CreditCardBlue />
    <span class="text-sm xl:text-base lg:text-xs font-bold text-blue-darkest">{{
      cardNumber
    }}</span>
    <span
      class="bg-blue-light w-[26px] h-[26px] rounded-full group-hover:bg-blue"
    >
    </span>
  </AppButtonBlue>
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

<style></style>
