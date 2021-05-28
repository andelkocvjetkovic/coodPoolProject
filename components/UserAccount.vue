<template>
  <section
    class="
      sm:flex sm:flex-wrap
      sm:gap-6
      sm:items-center
      lg:flex-col lg:flex-nowrap
      lg:items-stretch
    "
  >
    <div class="sm:w-1/3 sm:flex-grow lg:w-full">
      <h1 class="font-bold text-2xl text-blue-darkest">Your account</h1>
      <p class="font-bold text-gray-darkest">
        You can modify personal information here
      </p>
    </div>
    <div
      class="
        flex
        mt-[27px]
        p-2
        gap-x-[11px]
        bg-blue-lightest
        items-center
        sm:w-1/3
        sm:mt-0
        sm:flex-grow
        lg:w-full
      "
    >
      <UserInc class="w-16 h-16 rounded-full" />
      <section class="flex flex-col">
        <h3 class="text-blue-darkest font-bold text-lg">{{ user.userName }}</h3>
        <p class="flex flex-col text-gray-darkest text-sm">
          <span>{{ user.email }}</span>
          <span>{{ user.phoneNumber }}</span>
        </p>
      </section>
    </div>
    <section class="mt-[43px] sm:mt-0 sm:w-1/2 sm:flex-grow-0 lg:w-full">
      <h3 class="text-base font-bold text-blue-darkest">
        {{ userInformation.name }}
      </h3>
      <p class="bg-blue text-white text-sm px-4 py-3 rounded-lg mt-1">
        {{ userInformation.description }}
      </p>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    userInformation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
