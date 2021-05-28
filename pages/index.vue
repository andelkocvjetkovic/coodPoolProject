<template>
  <main
    class="flex flex-col items-center justify-center w-screen h-screen gap-y-6"
  >
    <AppBlueWrapper class="">
      <span class="text-3xl font-bold">4</span>
      <span class="text-base uppercase">Projects</span>
    </AppBlueWrapper>
    <AppButonTransparent />
    <AppInputWrapper lab-for="Name">
      <AppInput id="Name" v-model.trim="testData" />
    </AppInputWrapper>
    <p>{{ testData }}</p>
    <AppButtonBlue />
    <AppCardInactive />
    <AppCardActive />
    <FeaturesList />
    <UserTable />
  </main>
</template>
<script>
export default {
  data() {
    return {
      testData: "",
    };
  },
};
</script>
