<template>
  <header class="py-5 px-7 relative shadow">
    <nav
      class="
        flex
        items-center
        justify-end
        sm:max-w-lg
        sm:mx-auto
        md:max-w-2xl
        lg:max-w-4xl
        xl:max-w-6xl
        2xl:max-w-7xl
      "
    >
      <button
        class="
          flex
          justify-center
          items-center
          focus:outline-none
          absolute
          left-5
        "
        @click="toggleNav"
      >
        <HamIcon class="h-[30px] w-[30px]" />
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

<style></style>
