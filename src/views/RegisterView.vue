<template>
  <section class="register-section">
    <div
      class="container min-vh-100 d-flex align-items-center justify-content-center"
    >
      <div class="p-4 w-50 bg-white rounded-4 shadow-md">
        <h2 class="fs-4 text-center mb-2 reg-text">
          Register now before exploring!
          <ArrowIcon />
        </h2>

        <!-- form area -->
        <div class="container">
          <div class="row">
            <div class="col d-flex align-items-center justify-content-center">
              <img :src="registerIcon" alt="" class="w-75 h-75" />
            </div>
            <div class="col">
              <RegistrationFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ArrowIcon from "@/components/ArrowIcon.vue";
import RegistrationFrom from "@/components/Forms/RegistrationForm.vue";

export default {
  name: "RegisterView",
  components: {
    ArrowIcon,
    RegistrationFrom,
  },
  setup() {
    const registerIcon = "./img/icon-register.svg";

    return { registerIcon };
  },
};
</script>

<style scoped>
.register-section {
  background-color: var(--clr-blue);
}
.reg-text {
  color: var(--clr-purple);
  font-weight: 700;
}
</style>
