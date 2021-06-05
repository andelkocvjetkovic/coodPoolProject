<template>
  <section class="relative">
    <div
      class="
        flex flex-col
        gap-y-[14px]
        sm:flex-row
        sm:gap-x-[14px]
        lg:max-w-[589px]
        lg:mx-auto
      "
    >
      <FeatureItem
        v-for="feature in $options.featuresList"
        :key="feature.header"
        :feature-item="feature"
        class="xs:w-1/2 xs:mx-auto sm:mx-0 sm:w-1/6 flex-grow"
      />
    </div>
    <AppButtonTeal
      class="
        mt-8
        relative
        left-full
        transform
        -translate-x-full
        lg:absolute
        lg:mt-0
        lg:left-auto
        lg:translate-x-0
        lg:right-0
        lg:bottom-0
      "
    />
  </section>
</template>

<script>
import { featuresList } from "~/static/mockData.js";
export default {
  featuresList,
};
</script>

<style></style>
