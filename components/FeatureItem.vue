<template>
  <div
    class="
      bg-blue-lightest
      rounded-lg
      px-[20px]
      py-[15px]
      w-full
      flex flex-col
      justify-center
      items-center
      lg:px-[18px]
    "
  >
    <figure>
      <img :src="featureItem.iconSlug" :alt="featureItem.header" />
    </figure>
    <h2 class="text-2xl font-bold text-blue-darkest mt-[6px]">
      {{ featureItem.header }}
    </h2>
    <h3 class="text-2xl font-bold">
      $ {{ featureItem.price }}
      <span class="text-gray-dark text-sm">/ per month</span>
    </h3>
    <ul class="mt-[25px] text-base text-blue-darkest pb-2">
      <li v-for="(item, i) in featureItem.features" :key="i">
        {{ item }}
      </li>
    </ul>
    <AppButtonTeal
      v-if="isPlanSelected"
      class="
        flex
        justify-center
        gap-x-[10px]
        items-center
        group
        text-sm
        lg:w-full
      "
      ><span>Plan selected</span><AppChecked
    /></AppButtonTeal>
    <AppNuxtLinkTransparent
      v-if="isPlanSelected"
      :to="`/paymentplan/${featureItem.uuid}`"
      class="mt-[6px] text-sm lg:w-full"
      >Cancel subscription
    </AppNuxtLinkTransparent>
    <AppButonTransparent v-else> Select plan </AppButonTransparent>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    featureItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selectedFeatures: (state) => state.user.selectedFeature,
    }),
    isPlanSelected() {
      return this.selectedFeatures.includes(this.featureItem.uuid);
    },
  },
};
</script>

<style></style>
