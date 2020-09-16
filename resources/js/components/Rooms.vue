<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-4" v-for="roomType in roomTypes" :key="roomType.id">
        <div class="card">
          <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
          <div class="card-body">
            <h5 class="card-title">{{ roomType.name }} Room</h5>
            <p class="card-text">{{ roomType.quantity_bed }} beds</p>
            <a href="#" class="btn btn-primary float-right">Make a reservation</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rooms",
  data() {
    return {
      roomTypes: []
    };
  },
  methods: {
    async fetchRoomTypes() {
      try {
        let { data } = await axios.get("/api/roomTypes");

        console.log("respuesta", data);

        if (data.ok) {
          this.roomTypes = data.roomTypes;
          console.log("data", this.roomTypes);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.fetchRoomTypes();
  }
};
</script>

<style lang="css">
  .btn-primary {
    background: #003580 !important;
    border-color: #003580 !important;
  }
</style>