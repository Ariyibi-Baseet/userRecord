<template>
  <form @submit="submitForm">
    <div class="mb-3">
      <label for="" class="form-label">Fullname</label>
      <input
        type="text"
        class="form-control shadow-none rounded-4"
        v-model="formData.fname"
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Email Address</label>
      <input
        type="email"
        class="form-control shadow-none rounded-4"
        v-model="formData.email"
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Password</label>
      <input
        type="text"
        class="form-control shadow-none rounded-4"
        v-model="formData.pass"
      />
    </div>
    <button class="btn shadow-none rounded-4 w-100 mb-3">Sign up</button>
    <small class="text-center d-block text-muted"
      >Check next page for details</small
    >
  </form>
</template>

<script>
import { useToast } from "vue-toastification";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "RegistrationForm",
  setup() {
    const toast = useToast();
    const route = useRouter();
    const formData = ref({
      fname: "",
      email: "",
      pass: "",
    });

    const submitForm = (e) => {
      e.preventDefault();

      if (formData.value.fname && formData.value.email && formData.value.pass) {
        toast.success("You can now proceed to Login Page", {
          timeout: 2000,
        });
        // I will add a preloader in between before going to the next page
        setTimeout(() => {
          route.push("/login");
        }, 2000);
      } else {
        toast.warning("All filed must be filled", { timeout: 2000 });
      }
    };

    // watch if each field is null
    watch(
      () => formData.value.fname,
      (newFname) => {
        if (newFname === "") {
          toast.error("Fullname Field cannot be null", {
            timeout: 2000,
          });
        }
      }
    );

    watch(
      () => formData.value.email,
      (newEmail) => {
        if (newEmail === "") {
          toast.error("Email Address Field cannot be null", {
            timeout: 2000,
          });
        }
      }
    );

    watch(
      () => formData.value.pass,
      (newPassword) => {
        if (newPassword === "") {
          toast.error("Password Field cannot be null", {
            timeout: 2000,
          });
        }
      }
    );

    return { formData, submitForm };
  },
};
</script>

<style scoped>
small {
  font-size: 11px;
  display: none;
}
small.error {
  display: block;
  color: red;
}
.form-control {
  background-color: var(--clr-gray);
  border: 2px solid white;
}
.form-control:focus,
button:focus {
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
button:focus {
  background-color: var(--clr-green);
}
</style>
