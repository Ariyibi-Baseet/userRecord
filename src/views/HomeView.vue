<template>
  <!-- Dashboard section starts here -->
  <div class="min-vh-100 home-section">
    <!-- Navbar Area -->
    <NavBar />

    <!-- Main Area -->
    <div class="container">
      <main class="py-2 px-2 bg-white rounded-2 mt-5 shadow-md">
        <div class="container">
          <div class="head d-flex justify-content-end mb-2">
            <div class="left d-flex align-items-center">
              <h5 class="fw-bold">Users</h5>
              <button
                class="btn btn add-btn ms-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add New User
              </button>
            </div>
          </div>
        </div>

        <!-- User data table section -->
        <div class="container">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <!-- comment ID area -->
                  <!-- <th scope="col">Id</th> -->
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in Allusers" :key="user.id">
                  <!-- comment ID area -->
                  <!-- <th scope="row">{{ user.id }}</th> -->
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.city }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

    <!-- Add user modal form starts here -->
    <userModalForm @userData="displayUsersData" />
  </div>
</template>

<script>
// import axios from "axios";
import { ref } from "vue";
import NavBar from "@/components/Nav.vue";
import userModalForm from "@/components/Forms/userModalForm.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    userModalForm,
  },
  setup() {
    let Allusers = ref([]);

    const displayUsersData = (users) => {
      Allusers.value = JSON.parse(JSON.stringify(users));
    };

    return { displayUsersData, Allusers };
  },
};
</script>

<style>
.home-section {
  background-color: var(--clr-purple);
}
main {
  min-height: 200px;
}

.left > h5 {
  color: var(--clr-purple);
}

.add-btn,
.add-btn:focus {
  background-color: var(--clr-green) !important;
  color: #fff !important;
}
</style>
