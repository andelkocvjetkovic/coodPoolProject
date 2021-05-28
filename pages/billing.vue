<template>
  <section>
    <UserTable :subs-list="$options.userBilling" />
  </section>
</template>

<script>
import { userBilling } from "~/static/mockData.js";
export default {
  userBilling,
};
</script>
