<template functional>
  <input
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'w-full text-blue-darkest mt-[6px] rounded-lg  bg-gray-light p-2 focus:outline-none focus:ring-2 focus:ring-app-accent',
    ]"
    @input="(e) => listeners['input'](e.target.value)"
  />
</template>
