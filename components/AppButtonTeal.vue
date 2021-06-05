<template functional>
  <button
    v-bind="data.attrs"
    :class="['button-teal', data.class, data.staticClass]"
    v-on="listeners"
  >
    <slot>Save changes</slot>
  </button>
</template>
<style lang="scss">
.button-teal {
  background: $teal-light;
  color: $white;
  @extend %button;

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
}
</style>
