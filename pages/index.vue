<template>
  <section>
    <form
      class="
        flex flex-col
        gap-y-6
        mt-9
        sm:grid sm:grid-cols-2
        sm:gap-x-[25px]
        lg:mt-2
      "
      @submit.prevent="handleForm"
    >
      <AppInputWrapper lab-for="First-name">
        <AppInput
          id="First-name"
          v-model.trim="formData.firstName"
          type="text"
        />
      </AppInputWrapper>
      <AppInputWrapper lab-for="Email">
        <AppInput id="Email" v-model="formData.email" type="email" />
      </AppInputWrapper>
      <AppInputWrapper lab-for="Last-name">
        <AppInput id="Last-name" v-model="formData.lastName" type="text" />
      </AppInputWrapper>
      <AppInputWrapper lab-for="Mobile-phone">
        <AppInput
          id="Mobile-phone"
          v-model="formData.mobilePhone"
          type="text"
        />
      </AppInputWrapper>
      <AppInputWrapper lab-for="Password">
        <AppInput id="Password" v-model="formData.password1" type="password" />
      </AppInputWrapper>
      <AppInputWrapper lab-for="Confirm-password">
        <AppInput
          id="Confirm-password"
          v-model="formData.password2"
          type="password"
        />
      </AppInputWrapper>
      <div v-if="errors.length > 0" class="sm:col-span-2 sm:col-start-1">
        <ul class="text-sm text-gray-dark">
          <li v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>
      <AppButtonTeal
        type="submit"
        class="sm:col-start-2 lg:absolute bottom-0 right-0"
      />
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        email: "",
        lastName: "",
        mobilePhone: "",
        password1: "",
        password2: "",
      },
      errors: [],
    };
  },
  methods: {
    handleForm() {
      if (this.errors.length > 0) {
        this.errors.length = 0;
      }
      for (const key in this.formData) {
        if (Object.hasOwnProperty.call(this.formData, key)) {
          const element = this.formData[key];
          if (!this.checkField(element)) {
            this.errors.push(`${key} must have at least one character`);
          }
        }
      }
    },
    checkField(textInput) {
      return textInput.length > 1;
    },
  },
};
</script>
