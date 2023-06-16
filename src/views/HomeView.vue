<template>
  <!-- Dashboard section starts here -->
  <div class="min-vh-100 home-section">
    <!-- Navbar Area -->
    <NavBar />

    <!-- Main Area -->
    <div class="container">
      <main class="py-2 px-2 bg-white rounded-2 mt-5 shadow-md">
        <div class="container">
          <div class="head d-flex justify-content-end mb-5">
            <div class="left d-flex align-items-center">
              <h5 class="fw-bold">Users</h5>
              <button class="btn btn-primary ms-3">Add New User</button>
            </div>
          </div>
        </div>

        <!-- User data table section -->
        <div class="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
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
</style>
