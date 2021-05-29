<template>
  <div
    role="presentation"
    class="
      flex
      items-center
      justify-center
      p-2
      text-2xl text-white
      uppercase
      border
      rounded
      bg-app-accent
    "
  >
    <span class="block font-bold">{{ userInc }}</span>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userInc(state) {
        var firstLetterName = "N";
        var firstLetterLastName = "N";
        if (typeof state.user.userName == "string") {
          var [name, lastName] = state.user.userName.split(" ", 2);

          if (typeof name == "string" && !!name) {
            firstLetterName = name[0];
          }

          if (typeof lastName == "string" && !!lastName) {
            firstLetterLastName = lastName[0];
          }
        }
        return firstLetterName + firstLetterLastName;
      },
    }),
  },
};
</script>
