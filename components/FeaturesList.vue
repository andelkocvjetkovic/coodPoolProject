<template>
  <div
    class="flex flex-col gap-y-[14px] sm:flex-row sm:gap-y-0 sm:gap-x-[14px]"
  >
    <section
      v-for="offer in featuresList"
      :key="offer.uuid"
      class="
        bg-blue-lightest
        px-[22px]
        py-[15px]
        w-full
        flex flex-col
        justify-center
        items-center
      "
    >
      <figure>
        <component :is="offer.icon" />
      </figure>
      <h2 class="text-2xl font-bold text-blue-darkest mt-[6px]">
        {{ offer.header }}
      </h2>
      <h3 class="text-2xl font-bold">
        $ {{ offer.price }}
        <span class="text-gray-dark text-sm">/ per month</span>
      </h3>
      <ul class="mt-[25px] text-base text-blue-darkest">
        <li v-for="(feature, i) in features" :key="i">
          {{ feature }}
        </li>
      </ul>
      <AppButtonTeal v-if="true" class="w-full mt-2"
        >Plan selected</AppButtonTeal
      >
      <AppButonTransparent class="mt-[6px]">
        <span v-if="false">Select plan</span>
        <span v-else>Cancel subscription</span>
      </AppButonTransparent>
    </section>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import StarterIcon from "~/assets/svg/StarterIcon.svg";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    StarterIcon,
  },
  features: [
    "Up to 5 geteways",
    "Basic support",
    "Monthly updates",
    "First month fee",
    "Cance anytime",
  ],
  props: {
    features: {
      type: Array,
      default: () => [
        "Up to 5 geteways",
        "Basic support",
        "Monthly updates",
        "First month fee",
        "Cance anytime",
      ],
    },
    featuresList: {
      type: Array,
      default: () => [
        {
          uuid: uuidv4(),
          header: "Starter",
          price: 5,
          icon: StarterIcon,
        },
        {
          uuid: uuidv4(),
          header: "Business",
          price: 5,
          icon: StarterIcon,
        },
        {
          uuid: uuidv4(),
          header: "Enterprise",
          price: 5,
          icon: StarterIcon,
        },
      ],
    },
  },
};
</script>

<style></style>
