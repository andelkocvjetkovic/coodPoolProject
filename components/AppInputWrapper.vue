<template>
  <p class="flex flex-col">
    <label :for="labFor" class="text-base md:text-base font-bold">{{
      labelText
    }}</label>
    <slot />
  </p>
</template>
<script>
export default {
  props: {
    labFor: {
      type: String,
      required: true,
    },
  },
  computed: {
    labelText() {
      var tempArr = this.labFor.split("-");
      if (tempArr.length == 1) {
        return tempArr[0];
      } else {
        return tempArr.join(" ");
      }
    },
  },
};
</script>
