<template>
  <div class="user-info">
    <UserInc class="user-info__user-inc" />
    <span class="user-info__user-name">{{ user.userName }}</span>
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

<style lang="scss">
.user-info {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  &__user-inc {
    width: 43px;
    height: 43px;
    border-radius: 0.25rem;
  }
  &__user-name {
    font-weight: bold;
    text-transform: capitalize;
    @extend %text-sm;
  }
}
</style>
