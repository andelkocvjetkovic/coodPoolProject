<template>
  <div class="feature-item">
    <figure>
      <img
        width="82px"
        height="84px"
        :src="featureItem.iconSlug"
        :alt="featureItem.header"
      />
    </figure>
    <h2 class="feature-item__title">
      {{ featureItem.header }}
    </h2>
    <h3 class="feature-item__price">
      $ {{ featureItem.price }}
      <span class="feature-item__price__per">/ per month</span>
    </h3>
    <ul class="feature-item__list">
      <li v-for="(item, i) in featureItem.features" :key="i">
        {{ item }}
      </li>
    </ul>
    <AppButtonTeal v-if="isPlanSelected" class="feature-item__selected-plan"
      ><span>Plan selected</span><AppChecked
    /></AppButtonTeal>
    <AppNuxtLinkTransparent
      v-if="isPlanSelected"
      :to="`/paymentplan/${featureItem.uuid}`"
      class="feature-item__cancel-plan"
      >Cancel subscription
    </AppNuxtLinkTransparent>
    <AppButonTransparent v-else class="feature-item__select-plan">
      Select plan
    </AppButonTransparent>
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

<style lang="scss">
.feature-item {
  background-color: $blue-lightest;
  border-radius: 0.5rem;
  padding: 0.93rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @include respond-to("lg") {
    padding: 0.93rem 1.125rem;
  }

  &__title,
  &__price {
    @extend %text-2xl;
    font-weight: bold;
  }
  &__title {
    color: $blue-darkest;
    margin-top: 0.375px;
  }
  &__price {
    &__per {
      @extend %text-sm;
      color: $gray-dark;
      font-weight: normal;
    }
  }
  &__list {
    margin-top: 1.56rem;
    @extend %text-base;
    color: $blue-darkest;
    padding-bottom: 0.5rem;
  }
  &__selected-plan {
    @extend %text-sm;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.625rem;

    &:hover .checked-icon {
      background-color: rgba($color: $teal-light, $alpha: 0.7);
    }
  }
  &__cancel-plan {
    @extend %text-sm;
    width: 100%;
    margin-top: 0.375rem;
  }
  &__select-plan {
    width: 100%;
  }
}
</style>
