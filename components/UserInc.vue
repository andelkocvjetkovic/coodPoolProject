<template>
  <div role="presentation" class="user-inc">
    <span class="user-inc__name">{{ userInc }}</span>
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
          const [name, lastName] = state.user.userName.split(" ", 2);

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

<style lang="scss">
.user-inc {
  @extend %text-2xl;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: $white;
  text-transform: uppercase;
  border-width: 1px;
  background-color: $accent;

  &__name {
    display: block;
    font-weight: bold;
  }
}
</style>
