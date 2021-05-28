<template>
  <AppButtonBlue
    class="flex items-center bg-blue-lightest lg:hover:bg-blue-light group"
  >
    <CreditCardBlue />
    <span class="text-base font-bold ml-[9px] text-blue-darkest">{{
      cardNumber
    }}</span>
    <span
      class="
        ml-[30px]
        bg-blue-light
        w-[26px]
        h-[26px]
        rounded-full
        group-hover:bg-blue
      "
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
