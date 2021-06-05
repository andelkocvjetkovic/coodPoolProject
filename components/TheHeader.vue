<template>
  <header class="the-header">
    <nav class="the-header__nav">
      <button class="the-header__nav__button" @click="toggleNav">
        <HamIcon class="the-header__nav__button__icon" />
      </button>
      <UserInfo />
    </nav>
  </header>
</template>

<script>
import HamIcon from "~/assets/svg/HamIcon.svg";
export default {
  components: {
    HamIcon,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style lang="scss">
.the-header {
  padding: 1.25rem 1.75rem;
  position: relative;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  &__nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include respond-to("lg") {
      margin: 0 auto;
      max-width: 56rem;
    }
    @include respond-to("xl") {
      max-width: 72rem;
    }
    @include respond-to("xl") {
      max-width: 80rem;
    }
    &__button {
      display: flex;
      position: absolute;
      left: 1.75rem;
      justify-content: center;
      align-items: center;
      @extend %focus-outline-none;
      &__icon {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
}
</style>
