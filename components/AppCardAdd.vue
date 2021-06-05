<template functional>
  <button
    v-bind="data.attrs"
    :class="['card-add', data.class, data.staticClass]"
    v-on="listeners"
  >
    &#43; Add new Card
  </button>
</template>

<style lang="scss">
.card-add {
  @extend %card-status;
  font-size: 1rem;
  background: $blue-dark;
  color: $white;
  @extend %button;

  &:active {
    background-color: rgba($color: $blue-dark, $alpha: 0.6);
  }

  @include respond-to("lg") {
    &:hover {
      background-color: rgba($color: $blue-dark, $alpha: 0.8);
    }
    &:active {
      background-color: rgba($color: $blue-dark, $alpha: 0.6);
    }
  }
}
</style>
