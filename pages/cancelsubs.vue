<template>
  <section class="cancel-sub">
    <article class="cancel-sub__text">
      <h1 class="cancel-sub__text__title">
        You have cancelled your subscription
      </h1>
      <p class="cancel-sub__text__text">
        If you wish to continue using our platform please renew your
        subscription
      </p>
    </article>
    <div role="presentation" class="cancel-sub__img">
      <div class="cancel-sub__img__wrapper">
        <ShopSubscription class="cancel-sub__img__wrapper__img" />
      </div>
    </div>
  </section>
</template>

<script>
import ShopSubscription from "~/assets/svg/ShopSubscription.svg";
export default {
  components: { ShopSubscription },
  layout: "cancel",
};
</script>

<style lang="scss">
.cancel-sub {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
  row-gap: 3rem;

  @include respond-to("md") {
    flex-direction: row;
    row-gap: 0;
  }

  &__text {
    padding: 0rem 1rem;
    margin-top: 1rem;
    @include respond-to("md") {
      margin-top: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 66.6667%;
      padding-left: 3.2rem;
    }
    @include respond-to("lg") {
      padding-left: 6.25rem;
    }
    @include respond-to("xl") {
      padding-left: 11.62rem;
    }
    &__title {
      @extend %text-2xl;
      font-weight: bold;
      color: $blue-darkest;
    }
    &__text {
      @extend %text-base;
      font-weight: bold;
      color: $blue-dark;
    }
  }

  &__img {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    background-color: $blue-dark;

    @include respond-to("md") {
      flex-grow: 0;
      width: 33.3333%;
      order: -1;
    }
    &__wrapper {
      position: relative;
      padding-bottom: 56%;
      &__img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
