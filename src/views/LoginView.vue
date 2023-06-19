<template>
  <section class="login-section px-2 py-sm-4">
    <div
      class="container min-vh-100 d-flex align-items-center justify-content-center"
    >
      <div class="p-4 bg-white col-12 col-lg-6 rounded-4 shadow-md">
        <h2 class="fs-4 text-center mb-2 login-text">
          You can now proceed!
          <ArrowIcon />
        </h2>

        <!-- form area -->
        <div class="container">
          <div class="row">
            <div
              class="col d-flex align-items-center justify-content-center d-none d-sm-flex"
            >
              <img :src="loginIcon" alt="" class="w-75 h-75" />
            </div>
            <div class="col">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ArrowIcon from "@/components/ArrowIcon.vue";
import LoginForm from "@/components/Forms/LoginForm.vue";
export default {
  name: "LoginView",
  components: {
    ArrowIcon,
    LoginForm,
  },
  setup() {
    const loginIcon = "./img/icon-register.svg";

    return { loginIcon };
  },
};
</script>

<style scoped>
.login-section {
  background-color: var(--clr-blue);
  overflow: hidden;
}
.login-text {
  color: var(--clr-purple);
  font-weight: 700;
}
</style>
