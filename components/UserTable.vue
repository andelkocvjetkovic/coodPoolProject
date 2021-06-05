<template>
  <section class="user-table">
    <h1 class="user-table__title">Billing information</h1>
    <p class="user-table__text">Overview of your credit card transactions</p>
    <table class="user-table__table">
      <thead class="table__header">
        <tr class="table__header__row">
          <th colspan="1" class="table__header__row__col1">
            Subscription plan
          </th>
          <th colspan="1" class="table__header__row__col2">Amount paid</th>
          <th colspan="1" class="table__header__row__col3">Paid at</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="(sub, i) in subsList" :key="i" class="table__body__row">
          <td class="table__body__row__col1">{{ sub.plan }}</td>
          <td class="table__body__row__col2">{{ sub.amount }}</td>
          <td class="table__body__row__col3">
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

<style lang="scss">
.user-table {
  padding: 2rem 0.5rem;
  background-color: $blue-lightest;
  @include respond-to("lg") {
    padding: 1.5rem 1.75rem;
  }

  &__title {
    @extend %text-base;
    font-weight: bold;
    color: $blue-darkest;
  }
  &__text {
    @extend %text-sm;
    color: $gray-darkest;
  }
  &__table {
    min-width: 100%;
    margin-top: 30px;
    background-color: $white;
    color: blue-darkest;
  }
}
.table {
  &__header {
    &__row {
      @extend %text-sm;

      @include respond-to("md") {
        @include text-base;
      }
      &__col1,
      &__col2,
      &__col3 {
        padding: 0.5rem 1rem;
      }
      &__col1 {
        text-align: left;
      }
      &__col2 {
        text-align: center;
      }
      &__col3 {
        text-align: center;
        @include respond-to("md") {
          text-align: right;
        }
      }
    }
  }
  &__body {
    &__row {
      @extend %text-sm;

      &:nth-child(odd) {
        background-color: $blue-lightest;
      }
      @include respond-to("md") {
        @include text-base;
      }
      &__col1,
      &__col2,
      &__col3 {
        padding: 0.5rem 1rem;
      }
      &__col1 {
        text-align: left;
      }
      &__col2 {
        text-align: center;
      }
      &__col3 {
        text-align: center;
        @include respond-to("md") {
          text-align: right;
        }
      }
    }
  }
}
</style>
