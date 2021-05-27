<template functional>
  <section
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'flex flex-col justify-center items-center bg-blue text-white px-6 py-4 rounded',
    ]"
    v-on="listeners"
  >
    <slot />
  </section>
</template>
