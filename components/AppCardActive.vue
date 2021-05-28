<template>
  <AppButtonTeal class="flex items-center group">
    <CreditCardWhite />
    <span class="text-base font-bold ml-[9px]">{{ cardNumber }}</span>
    <span
      class="
        ml-[30px]
        bg-teal-dark
        w-[26px]
        h-[26px]
        rounded-full
        flex
        justify-center
        items-center
        lg:group-hover:bg-teal-light
      "
    >
      <CheckIcon />
    </span>
  </AppButtonTeal>
</template>

<script>
import CheckIcon from "~/assets/svg/CheckIcon.svg";
import CreditCardWhite from "~/assets/svg/CreditCardWhite.svg";
export default {
  components: {
    CheckIcon,
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
