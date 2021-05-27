<template>
  <section>
    <h1 class="font-bold text-2xl text-blue-darkest">Your account</h1>
    <p class="font-bold text-gray-darkest">
      You can modify personal information here
    </p>
    <div class="flex mt-[27px] p-2 gap-x-[11px] bg-blue-lightest items-center">
      <UserInc class="w-16 h-16 rounded-full" />
      <section class="flex flex-col">
        <h3 class="text-blue-darkest font-bold text-lg">{{ user.userName }}</h3>
        <p class="flex flex-col text-gray-darkest text-sm">
          <span>{{ user.email }}</span>
          <span>{{ user.phoneNumber }}</span>
        </p>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style></style>
