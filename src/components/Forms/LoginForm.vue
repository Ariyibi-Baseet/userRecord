<template>
  <form @submit="submitForm">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email Address</label>
      <input
        type="email"
        class="form-control shadow-none rounded-4"
        v-model="formData.email"
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Password</label>
      <input
        type="password"
        class="form-control shadow-none rounded-4"
        v-model="formData.password"
      />
    </div>
    <button class="btn btn-block shadow-none rounded-4 w-100 mb-3">
      Sign in
    </button>
    <small class="text-center d-block text-muted"
      >Check next page for details</small
    >
  </form>
</template>

<script>
import { ref, watch } from "vue";
import { useToast } from "vue-toastification";
export default {
  name: "LoginForm",
  setup() {
    const toast = useToast();
    const formData = ref({
      email: "",
      password: "",
    });

    // handle form submit
    const submitForm = (e) => {
      e.preventDefault();
      if (formData.value.email && formData.value.password) {
        toast.success("You can now proceed to Dashboard", 2000);
      } else {
        toast.warning("All filed must be filled", 2000);
      }
    };

    // watchers
    watch(
      () => formData.value.email,
      (newEmail) => {
        if (newEmail == "") {
          toast.error("Email Address Field cannot be null", 2000);
        }
      }
    );

    watch(
      () => formData.value.password,
      (newPassword) => {
        if (newPassword == "") {
          toast.error("Password Field cannot be null", 2000);
        }
      }
    );

    return { formData, submitForm };
  },
};
</script>

<style scoped>
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
