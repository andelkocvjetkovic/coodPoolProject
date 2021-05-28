<template>
  <section class="w-full py-8 px-2 lg:px-7 bg-blue-lightest">
    <h2 class="text-base font-bold text-blue-darkest">Billing information</h2>
    <p class="text-sm text-gray-darkest">
      Overview of your credit card transactions
    </p>
    <table class="min-w-full mt-[30px] bg-white text-blue-darkest">
      <thead>
        <tr class="text-xs md:text-base">
          <th colspan="1" class="text-left px-[16px] py-2">
            Subscription plan
          </th>
          <th colspan="1" class="text-center px-[16px] py-2">Amount paid</th>
          <th colspan="1" class="text-center px-[16px] py-2 md:text-right">
            Paid at
          </th>
        </tr>
      </thead>
      <tbody class="">
        <tr
          v-for="(sub, i) in subsList"
          :key="i"
          class="odd:bg-blue-lightest text-xs md:text-base"
        >
          <td class="px-[16px] py-2 text-left">{{ sub.plan }}</td>
          <td class="px-[16px] py-2 text-center">{{ sub.amount }}</td>
          <td class="px-[16px] py-2 text-center md:text-right">
            {{ sub.paidAt }}
          </td>
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
          plan: "Starter",
          amount: "3964",
          paidAt: Date.now(),
        },
        {
          plan: "Starter",
          amount: "3964",
          paidAt: Date.now(),
        },
        {
          plan: "Starter",
          amount: "3964",
          paidAt: Date.now(),
        },
      ],
    },
  },
};
</script>

<style></style>
