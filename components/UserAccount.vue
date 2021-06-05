<template>
  <section class="user-account">
    <div class="user-account__header">
      <h1 class="user-account__header__title">Your account</h1>
      <p class="user-account__header__info">
        You can modify personal information here
      </p>
    </div>
    <div class="user-account__user">
      <UserInc class="user-account__user__user-inc" />
      <section class="user-account__user__user-info">
        <h3 class="user-account__user__user-info__name">{{ user.userName }}</h3>
        <p class="user-account__user__user-info__rest-info">
          <span>{{ user.email }}</span>
          <span>{{ user.phoneNumber }}</span>
        </p>
      </section>
    </div>
    <section class="user-account__status">
      <h2 class="user-account__status__title">
        {{ userInformation.name }}
      </h2>
      <p class="user-account__status__description">
        {{ userInformation.description }}
      </p>
    </section>
    <section v-if="showCreditCards" class="user-account__credit-cards">
      <AppCardAdd class="user-account__credit-cards__add-card" />
      <template v-if="userCreditCards.length > 0">
        <div
          v-for="(card, i) in userCreditCards"
          :key="i"
          class="user-account__credit-cards__cards"
        >
          <AppCardActive
            v-if="card.isActive"
            class="user-account__credit-cards__cards__active"
          />
          <AppCardInactive
            v-else
            class="user-account__credit-cards__cards__inactive"
          />
        </div>
      </template>
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
    userCreditCards() {
      return this.user.userCards;
    },
    showCreditCards() {
      return this.$route.name == "creditcard";
    },
  },
};
</script>

<style lang="scss" scoped>
.user-account {
  @include respond-to("sm") {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
  }
  @include respond-to("lg") {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
  }
  &__header {
    @include respond-to("sm") {
      width: 33.3333%;
      flex-grow: 1;
    }
    @include respond-to("lg") {
      width: 100%;
    }
    &__title {
      font-weight: bold;
      color: $blue-darkest;
      @extend %text-xl;

      @include respond-to("2xl") {
        @include text-2xl;
      }
    }
    &__info {
      @extend %text-sm;
      letter-spacing: -0.025em;
      font-weight: bold;
      color: $gray-darkest;

      @include respond-to("2xl") {
        @include text-base;
      }
    }
  }
  &__user {
    display: flex;
    align-items: center;
    margin-top: 1.7rem;
    padding: 0.5rem;
    column-gap: 0.7rem;
    border-radius: 0.5rem;
    background-color: $blue-lightest;

    @include respond-to("sm") {
      width: 33.3333%;
      margin-top: 0;
      flex-grow: 1;
    }
    @include respond-to("lg") {
      width: 100%;
      margin-top: 1.7rem;
    }

    &__user-inc {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 99999px;

      @include respond-to("lg") {
        width: 4rem;
        height: 4rem;
        padding: 0.5rem;
      }
    }
    &__user-info {
      display: flex;
      flex-direction: column;

      &__name {
        color: $blue-darkest;
        font-weight: bold;
        @extend %text-lg;
      }
      &__rest-info {
        display: flex;
        flex-direction: column;
        color: $gray-darkest;
        @extend %text-sm;
      }
    }
  }
  &__status {
    margin-top: 2.7rem;
    @include respond-to("sm") {
      margin-top: 0;
      width: 33.3333%;
    }
    @include respond-to("lg") {
      margin-top: 2.7rem;
      width: 95%;
    }
    &__title {
      @extend %text-base;
      font-weight: bold;
      color: $blue-darkest;
    }
    &__description {
      background-color: $blue;
      color: $white;
      @extend %text-sm;
      padding: 1rem 0.75rem;
      border-radius: 0.5rem;
      margin-top: 0.25rem;
    }
  }
  &__credit-cards {
    overflow-y: auto;
    max-height: 16rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    margin-top: 0.875rem;

    @include respond-to("sm") {
      width: 33.3333%;
      flex-grow: 1;
    }
    @include respond-to("lg") {
      width: 95%;
      max-height: 100%;
    }

    &__add-card {
      text-align: left;
    }

    &__cards {
      &__active {
        width: 100%;
      }
      &__inactive {
        width: 100%;
      }
    }
  }
}
</style>
