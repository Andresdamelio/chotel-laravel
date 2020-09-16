<template>
  <nav class="navbar navbar-expand-lg static-top">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="d-flex align-items-center">
          <img src="../../images/chotel.png" alt="CHotel reservations" />
          <span class="title">CHotel</span>
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Make a reservation</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/rooms" class="nav-link">Rooms</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-header"
};
</script>

<style lang="scss">
.navbar {
  background: #003580 !important;

  & .title {
    color: #fff;
    text-decoration: none;
    font-family: Roboto;
    font-weight: 600;
    font-size: 35px;
  }

  & .navbar-nav .nav-link {
    color: #fff;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>