<template functional>
  <NuxtLink
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'px-3 py-2 focus:outline-none border border-blue-darkest text-blue-darkest text-center rounded text-sm bg-blue-darkest bg-opacity-0 transition duration-150 ease-out active:bg-opacity-60  active:text-white lg:hover:text-white lg:hover:bg-opacity-100 lg:active:bg-opacity-60',
    ]"
    v-on="listeners"
  >
    <slot></slot>
  </NuxtLink>
</template>
