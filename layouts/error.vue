<template>
  <main class="flex flex-col justify-center items-center gap-y-6 mt-8">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <AppNuxtLinkTransparent to="/">Home page</AppNuxtLinkTransparent>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
