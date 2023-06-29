<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="formModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-bolder" id="staticBackdropLabel">
            Add User
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="" class="form-label">Fullname</label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="formData.fname"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Email Address</label>
              <input
                type="email"
                class="form-control shadow-none"
                v-model="formData.email"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">City</label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="formData.city"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn close-btn"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn add-btn" @click="addNewUser">
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  name: "modalForm",
  setup() {
    const toast = useToast();
    const formModal = ref(null);
    const formData = ref({
      fname: "",
      email: "",
      city: "",
    });
    const users = ref([]);
    const vm = getCurrentInstance(); // get Vue instance

    // modal

    // Add new user to records
    const addNewUser = () => {
      if (formData.value.fname && formData.value.email && formData.value.city) {
        axios
          .post(
            process.env.VUE_APP_HARPERDB_INSTANCE,
            JSON.stringify({
              operation: "insert",
              schema: "user_details",
              table: "user",
              records: [
                {
                  name: formData.value.fname,
                  city: formData.value.city,
                  email: formData.value.email,
                },
              ],
            }),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: process.env.VUE_APP_HARPERDB_TOKEN,
              },
            }
          )
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
        toast.success(`${formData.value.fname} Added Successfully!`, {
          timeout: 2000,
        });

        // console.log(modalBox);

        // erase all data from the form
        formData.value.fname = "";
        formData.value.email = "";
        formData.value.city = "";
      } else {
        toast.warning("All Input must be filled", { timeout: 2000 });
      }
    };

    // Get users to the table
    onMounted(() => {
      axios
        .post(
          process.env.VUE_APP_HARPERDB_INSTANCE,
          JSON.stringify({
            operation: "sql",
            sql: "SELECT * FROM user_details.user",
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.VUE_APP_HARPERDB_TOKEN,
            },
          }
        )
        .then((response) => {
          // console.log("response here" + JSON.stringify(response.data, null, 2));
          let datas = JSON.parse(JSON.stringify(response.data));
          users.value = datas;
          vm.emit("userData", users.value);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return { formData, addNewUser, formModal };
  },
};
</script>

<style scoped>
.modal-title {
  color: var(--clr-purple);
}
.close-btn {
  background-color: var(--clr-red);
  color: #fff;
}
.add-btn {
  background-color: var(--clr-green) !important;
  color: #fff !important;
}
</style>
