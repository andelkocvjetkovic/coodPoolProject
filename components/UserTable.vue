<template>
  <section class="w-full px-7 py-8 bg-blue-lightest">
    <h2 class="text-base font-bold text-blue-darkest">Billing information</h2>
    <p class="text-sm text-gray-darkest">
      Overview of your credit card transactions
    </p>
    <table class="min-w-full">
      <thead>
        <tr>
          <th colspan="1" class="text-left px-[14px] py-1">
            Subscription plan
          </th>
          <th colspan="1" class="text-center px-[14px] py-1">Amount paid</th>
          <th colspan="1" class="text-right px-[14px] py-1">Paid at</th>
        </tr>
      </thead>
      <tbody class="mt-[30px]">
        <tr v-for="(sub, i) in subsList" :key="i" class="odd:bg-white">
          <td class="px-[14px] py-1 text-base text-left">{{ sub.type }}</td>
          <td class="px-[14px] py-1 text-base text-center">{{ sub.amount }}</td>
          <td class="px-[14px] py-1 text-right">{{ sub.paid }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    subsList: {
      type: Array,
      default: () => [
        {
          type: "Starter",
          amount: "3964",
          paid: Date.now(),
        },
        {
          type: "Starter",
          amount: "3964",
          paid: Date.now(),
        },
        {
          type: "Starter",
          amount: "3964",
          paid: Date.now(),
        },
      ],
    },
  },
};
</script>

<style></style>
