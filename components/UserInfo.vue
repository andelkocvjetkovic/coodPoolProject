<template>
  <div class="flex items-center gap-x-3">
    <UserInc class="w-[43px] h-[43px]" />
    <span class="text-sm lg:text-base font-bold text-blue-darkest capitalize">{{
      user.userName
    }}</span>
  </div>
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
