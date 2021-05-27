<template>
  <main
    class="
      flex flex-col
      justify-between
      h-screen
      overflow-hidden
      bg-white
      gap-y-12
      md:flex-row
      md:gap-y-0
    "
  >
    <article
      class="
        px-4
        md:flex md:flex-col
        md:justify-center
        md:w-2/3
        md:pl-[50px]
        lg:pl-[100px]
        xl:pl-[186px]
      "
    >
      <h1 class="mt-12 text-2xl font-bold text-blue-darkest">
        You have cancelled your subscription
      </h1>
      <h2 class="text-base font-bold text-blue-dark">
        If you wish to continue using our platform please renew your
        subscription
      </h2>
    </article>
    <div
      role="presentation"
      class="
        relative
        flex flex-col
        justify-end
        flex-grow
        bg-blue-dark
        md:flex-grow-0
        md:w-1/3
        md:order-first
      "
    >
      <div class="relative pb-[56%]">
        <ShopSubscription class="absolute inset-0 w-full h-full" />
      </div>
    </div>
  </main>
</template>

<script>
import ShopSubscription from "~/assets/svg/ShopSubscription.svg";
export default {
  components: { ShopSubscription },
  layout: "cancel",
};
</script>

<style></style>
