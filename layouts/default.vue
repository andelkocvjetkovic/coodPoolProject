<template>
  <div>
    <TheHeader />
    <main
      class="
        mt-9
        px-7
        min-h-screen
        lg:px-0
        lg:max-w-4xl
        lg:mx-auto
        lg:grid lg:grid-cols-4 lg:grid-rows-4
        lg:gap-x-[16px]
        lg:relative
        xl:max-w-6xl
        xl:gap-x-[30px]
        2xl:max-w-7xl
      "
    >
      <aside
        v-if="currentUserInfo"
        class="lg:col-start-1 lg:col-span-1 lg:row-span-4"
      >
        <UserAccount :user-information="currentUserInfo" />
      </aside>
      <nav
        id="navBar"
        class="mt-9 lg:col-start-2 lg:col-span-3 lg:row-span-1 lg:mt-[77px]"
      >
        <ul
          class="
            flex
            gap-x-6
            overflow-x-scroll
            text-gray-dark
            py-4
            pr-5
            xs:max-w-sm
            xs:mx-auto
            sm:pr-0
            md:overflow-hidden
            sm:justify-between
            md:max-w-xl
            md:py-2
          "
        >
          <li
            v-for="page in $options.AppInformation"
            :key="page.page"
            class="flex flex-col justify-between items-center"
          >
            <NuxtLink
              :to="{
                name: page.page,
                hash: '#navBar',
              }"
              class="flex flex-col w-full items-center"
            >
              <span class="w-12 h-12 inline-flex items-center">
                <component
                  :is="page.component"
                  :current-active="currentPage == page.page"
                  class="w-full h-full"
                />
              </span>
              <span class="text-xs mt-3 lg:text-sm text-center">
                {{ page.name }}</span
              >
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <Nuxt class="lg:col-start-2 lg:col-span-3 lg:row-span-3 lg:mt-[30px]" />
    </main>
    <footer
      class="
        mt-6
        px-7
        py-6
        flex flex-col
        gap-y-3
        text-blue-dark
        font-bold
        text-base
        sm:flex-row
        sm:justify-between
        lg:py-7
        lg:px-0
        lg:mx-auto
        lg:max-w-4xl
        xl:max-w-6xl
        2xl:max-w-7xl
      "
    >
      <p class="divide-x-2 divide-blue-dark flex">
        <a class="pr-1" href="#">Terms & Conditions</a>
        <a class="px-1" href="#">Privacy policy</a>
      </p>
      <p>Version {{ appVersion }}</p>
    </footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { AppInformation } from "~/static/mockData.js";
export default {
  AppInformation,
  computed: {
    ...mapState(["appVersion"]),
    currentPage() {
      /*
        splitting by '-' because nuxt add -slug for dynamic pages names
         example: "paymentplan-slug"
       */
      return this.$route.name && this.$route.name.split("-")[0];
    },
    currentUserInfo() {
      var item = this.$options.AppInformation.find(
        function findByHind(item) {
          return item.page === this.currentPage;
        }.bind(this)
      );
      if (item == null) {
        this.$nuxt.error({ statusCode: 404 });
      }
      return item;
    },
  },
};
</script>
<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
