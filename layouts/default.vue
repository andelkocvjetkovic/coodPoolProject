<template>
  <div>
    <TheHeader />
    <main class="main">
      <aside v-if="currentUserInfo" class="main__aside">
        <UserAccount :user-information="currentUserInfo" />
      </aside>
      <nav id="navBar" class="main__nav-bar">
        <ul class="nav-bar__ul">
          <li
            v-for="page in $options.AppInformation"
            :key="page.page"
            class="nav-bar__ul__li"
          >
            <NuxtLink
              :to="{
                name: page.page,
                hash: '#navBar',
              }"
              class="nav-bar__ul__li__link"
            >
              <span class="nav-bar__ul__li__link__icon">
                <component
                  :is="page.component"
                  :current-active="currentPage == page.page"
                  class="w-full h-full"
                />
              </span>
              <span class="nav-bar__ul__li__link__name"> {{ page.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="main__pages">
        <Nuxt class="lg:col-start-2 lg:col-span-3 lg:row-span-3" />
      </div>
    </main>
    <footer class="footer">
      <p class="footer__info">
        <a href="#">Terms & Conditions</a>
        <span>&vert;</span>
        <a href="#">Privacy policy</a>
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
        function findByPageName(item) {
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

<style lang="scss">
.footer {
  margin-top: 1.5rem;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  color: $blue-dark;
  font-weight: bold;
  @extend %text-base;

  @include respond-to("sm") {
    flex-direction: row;
    justify-content: space-between;
  }
  @include respond-to("lg") {
    padding: 1.75rem 0rem;
    max-width: 56rem;
    margin: 0 auto;
  }
  @include respond-to("xl") {
    max-width: 72rem;
  }
  @include respond-to("2xl") {
    max-width: 72rem;
  }
  &__info {
    display: flex;
    align-items: baseline;
    column-gap: 0.3rem;
  }
}
.main {
  margin-top: 2.25rem;
  padding: 0 1.75rem;
  min-height: 100vh;
  @include respond-to("lg") {
    padding: 0;
    position: relative;
    max-width: 56rem;
    margin: 0 auto;
    margin-top: 2.25rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 170px repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1.875rem;
  }
  @include respond-to("xl") {
    max-width: 72rem;
    column-gap: 1.2rem;
  }
  @include respond-to("2xl") {
    max-width: 80rem;
  }
  &__aside {
    @include respond-to("lg") {
      grid-column: 1 / span 1;
      grid-row: 1 / span 4;
    }
  }
  &__nav-bar {
    margin-top: 2.25rem;

    @include respond-to("lg") {
      margin-top: auto;
      grid-column: 2 / span 3;
      grid-row: 1 / span 1;
    }
  }
  &__pages {
    /* lg:col-start-2 lg:col-span-3 lg:row-span-3 */
    @include respond-to("lg") {
      grid-column: 2 / span 3;
      grid-row: 2 / span 3;
    }
  }
}

.nav-bar {
  &__ul {
    display: flex;
    column-gap: 1.5rem;
    overflow-x: auto;
    color: $gray-dark;
    padding: 1rem 0rem;
    padding-right: 1.25rem;

    @include respond-to("xs") {
      max-width: 24rem;
      margin: 0 auto;
    }
    @include respond-to("sm") {
      padding: 0;
      justify-content: space-between;
    }
    @include respond-to("md") {
      max-width: 36rem;
      overflow: hidden;
      padding: 0.5rem 0;
    }
    &__li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      &__link {
        display: inline-flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__icon {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        &__name {
          /* text-xs mt-3 lg:text-sm text-center */
          @extend %text-xs;
          margin-top: 0.75rem;

          @include respond-to("lg") {
            @include text-sm;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
