<template>
  <section
    class="text-blue-darkest mt-[38px] sm:max-w-[470px] sm:mx-auto lg:mt-0"
  >
    <section class="text-center">
      <h1 class="text-2xl font-bold">We are sorry to see you go</h1>
      <p class="text-base mt-2 sm:p-3">
        Before you unsubscribe consider changing the payment plan. If you are
        uncertain which plan best suites your business do not hesitate to
        contact our support and we will do our best to assist you in choosing
        the right plan for you.
      </p>
    </section>
    <section class="mt-[88px]">
      <h2 class="text-lg text-center font-bold uppercase">
        OUR JOURNEY SO FAR
      </h2>
      <div class="mt-4 flex flex-col gap-y-2 sm:flex-row sm:gap-x-2">
        <p
          v-for="(item, i) in $options.ourJourney"
          :key="i"
          class="
            flex flex-col
            justify-center
            items-center
            bg-blue
            text-white
            px-6
            py-4
            rounded
            gap-y-4
            sm:w-1/4
            sm:flex-grow
          "
        >
          <span class="text-4xl font-bold">{{ item.description }}</span>
          <span class="text-base uppercase">{{ item.name }}</span>
        </p>
      </div>
    </section>
    <section class="mt-[88px] text-center">
      <h2 class="text-2xl font-bold">Are you sure you want to unsubscribe?</h2>
      <p class="text-base mt-2">
        If you cancel your subscription you won’t be able to use any of the
        platform features and your payments will be discontinued.
      </p>
      <p class="flex justify-center gap-[9px] mt-6">
        <AppButonTransparent>Cancel</AppButonTransparent>
        <AppButonTransparent>Confirm</AppButonTransparent>
      </p>
    </section>
  </section>
</template>

<script>
import { ourJourney } from "~/static/mockData.js";
export default {
  ourJourney,
};
</script>

<style></style>
