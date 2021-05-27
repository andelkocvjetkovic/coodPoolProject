<template functional>
  <button
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'bg-teal-light px-4 py-2 focus:outline-none lg:transition-colors transition-opacity duration-150 ease-out text-center text-white rounded text-sm lg:hover:bg-teal-dark active:bg-opacity-60 lg:active:bg-opacity-60',
    ]"
    v-on="listeners"
  >
    <slot>Save changes</slot>
  </button>
</template>
