<template>
  <section class="register-section px-2 py-sm-4">
    <div
      class="container min-vh-100 d-flex align-items-center justify-content-center"
    >
      <div
        class="p-4 bg-white col-12 col-lg-6 rounded-4 shadow-md form-wrapper"
      >
        <h2 class="fs-4 text-center mb-2 reg-text">
          Register now before exploring!
          <ArrowIcon />
        </h2>

        <!-- form area -->
        <div class="container mt-3 mt-sm-0">
          <div class="row">
            <div
              class="col-12 col-sm-6 d-flex align-items-center justify-content-center d-none d-sm-flex"
            >
              <img :src="registerIcon" alt="" class="w-75 h-75" />
            </div>
            <div class="col-12 col-sm-6">
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
  overflow-y: hidden;
}
.reg-text {
  color: var(--clr-purple);
  font-weight: 700;
}
</style>
