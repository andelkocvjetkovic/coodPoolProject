<template>
  <div class="input-wrapper">
    <label :for="labFor" class="input-wrapper__label">{{ labelText }}</label>
    <p class="input-wrapper__input">
      <slot />
    </p>
  </div>
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
<style lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;
  &__label {
    @extend %text-base;
    font-weight: bold;
  }
  &__input {
    display: flex;
  }
}
</style>
