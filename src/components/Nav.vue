<template>
  <nav class="p-2 w-100 bg-white shadow-md">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Brand -->
      <h4 class="brand mt-2">User Records <i class="bi bi-table"></i></h4>

      <div class="d-flex align-items-center justify-content-center">
        <!-- notification 
      should be able to notify user with a notification sound and red dot
      -->
        <div class="notification-wrapper">
          <i class="bi bi-bell fs-4 position-relative notification">
            <span
              class="position-absolute p-2 border-light rounded-circle alert"
            >
              <span class="visually-hidden">New alerts</span>
            </span>
          </i>
        </div>
        <div class="logout-wrapper ms-3">
          <button class="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.brand {
  font-weight: 700;
  color: var(--clr-purple);
}
.notification {
  color: var(--clr-purple);
}
.alert {
  left: 50%;
  background-color: #e05466;
}
</style>
