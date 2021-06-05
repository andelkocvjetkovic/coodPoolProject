<template functional>
  <button
    v-bind="data.attrs"
    :class="['button-transparent', data.class, data.staticClass]"
    v-on="listeners"
  >
    <slot>Select plan</slot>
  </button>
</template>
<style lang="scss">
.button-transparent {
  @extend %button-transparent;
}
</style>
