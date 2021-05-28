<template functional>
  <button
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'bg-blue-dark text-base px-3 py-2 font-bold focus:outline-none transition duration-150 ease-out text-center text-white rounded lg:hover:bg-blue active:bg-opacity-60 lg:active:bg-opacity-60',
    ]"
    v-on="listeners"
  >
    <slot></slot>
  </button>
</template>
