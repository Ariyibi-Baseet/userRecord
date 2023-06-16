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
              <form>
                <div class="mb-3">
                  <label for="" class="form-label">Fullname</label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-4"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    class="form-control shadow-none rounded-4"
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Password</label>
                  <input
                    type="text"
                    class="form-control shadow-none rounded-4"
                  />
                </div>
                <button class="btn btn-block shadow-none rounded-4 w-100 mb-3">
                  Sign up
                </button>
                <small class="text-center d-block text-muted"
                  >Check next page for details</small
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ArrowIcon from "@/components/ArrowIcon.vue";
export default {
  name: "RegisterView",
  components: {
    ArrowIcon,
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

.form-control {
  background-color: var(--clr-gray);
  border: 2px solid white;
}
.form-control:focus,
button:focus {
  border: none;
  border: 2px solid white;
}

button {
  background-color: var(--clr-green);
  text-transform: uppercase;
  transition: background-color 300ms ease-in;
  color: #fff;
}
button:hover {
  background-color: var(--clr-green-l);
  transition: background-color 300ms ease-out;
  color: #fff;
}
</style>
