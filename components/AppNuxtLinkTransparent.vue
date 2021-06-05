<template functional>
  <NuxtLink
    v-bind="data.attrs"
    :class="['nuxt-link-transparent', data.class, data.staticClass]"
    v-on="listeners"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style lang="scss">
.nuxt-link-transparent {
  @extend %button-transparent;
}
</style>
