<template functional>
  <input
    v-bind="data.attrs"
    :class="[data.class, data.staticClass, 'input-field']"
    @input="(e) => listeners['input'](e.target.value)"
  />
</template>
<style lang="scss">
.input-field {
  @extend %input;
}
</style>
