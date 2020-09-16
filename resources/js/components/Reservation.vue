<template>
  <div class="container">
    <div class="py-3 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="../../images/chotel.png"
        alt="logo CHotel"
        width="80"
        height="80"
      />
      <h2>Check availability</h2>
      <p
        class="lead"
      >Choose the type of room you want, enter the check-in and check-out dates and press check availability.</p>
    </div>
    <div class="row bg-white p-3 rounded shadow mb-5">
      <div class="col-md-12">
        <form class="needs-validation" @submit.prevent="checkAvailability">
          <div class="row">
            <div class="col-md-12 mb-3">
              <label for="type-room">Type of room</label>
              <select
                class="custom-select d-block w-100"
                id="type-room"
                required
                v-model="checkReservation.room_type_id"
              >
                <option value="null">Choose...</option>
                <option
                  v-for="roomType in roomTypes"
                  :key="roomType.id"
                  :value="roomType.id"
                >{{ roomType.name }} Room</option>
              </select>
              <small v-if="error && errors['room_type_id']" class="form-text text-danger">{{ errors['room_type_id'][0] }}</small>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="checking">Checking</label>
              <input
                class="form-control"
                type="date"
                id="checking"
                v-model="checkReservation.check_in_at"
              />
              <small v-if="error && errors['check_in_at']" class="form-text text-danger">{{ errors['check_in_at'][0] }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label for="checkout">Checkout</label>
              <input
                class="form-control"
                type="date"
                id="checkout"
                v-model="checkReservation.check_out_at"
              />
              <small v-if="error && errors['check_out_at']" class="form-text text-danger">{{ errors['check_out_at'][0] }}</small>
            </div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="submit">Check availability</button>
        </form>
      </div>
    </div>

    <div class="row bg-white p-3 rounded shadow mb-5" v-if="check">
      <div class="col-md-12">
        <p
          class="lead"
          v-if="availability > 0"
        >There are {{ availability }} {{ getNameRoom(checkReservation.room_type_id) }} rooms available.</p>
        <p class="lead" v-else>No rooms available.</p>

        <button
          class="btn btn-primary btn-lg btn-block"
          v-if="availability > 0"
          @click="reserve(checkReservation.room_type_id)"
        >Reserve</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservation",
  data() {
    return {
      roomTypes: [],
      errors: [],
      availability: null,
      check: false,
      error: false,
      checkReservation: {
        room_type_id: null,
        check_in_at: null,
        check_out_at: null
      }
    };
  },
  methods: {
    async fetchRoomTypes() {
      try {
        let { data } = await axios.get("/api/roomTypes");

        if (data.ok) {
          this.roomTypes = data.roomTypes;
        }
      } catch (error) {
        console.log(error);
      }
    },
    checkAvailability() {
      axios
        .get("/api/room/reservation/availability", {
          params: { ...this.checkReservation }
        })
        .then(response => {
          let { total } = response.data;
          this.availability = total;
          this.check = true;
          this.error = false;
        })
        .catch(error => {
          let { errors } = error.response.data;
          this.check = false;
          this.errors = errors;
          this.error = true;
        });
    },

    reserve(id) {
      this.router.push({
        name: "",
        params: { id: this.checkReservation.room_type_id }
      });
    },

    getNameRoom(id) {
      return this.roomTypes.find(roomType => roomType.id == id).name;
    }
  },

  mounted() {
    this.fetchRoomTypes();
  }
};
</script>
