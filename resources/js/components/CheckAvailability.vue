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
    <div class="row bg-white p-3 rounded shadow mb-5" v-if="!thereResults">
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
              <small
                v-if="error && errors['room_type_id']"
                class="form-text text-danger"
              >{{ errors['room_type_id'][0] }}</small>
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
              <small
                v-if="error && errors['check_in_at']"
                class="form-text text-danger"
              >{{ errors['check_in_at'][0] }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label for="checkout">Checkout</label>
              <input
                class="form-control"
                type="date"
                id="checkout"
                v-model="checkReservation.check_out_at"
              />
              <small
                v-if="error && errors['check_out_at']"
                class="form-text text-danger"
              >{{ errors['check_out_at'][0] }}</small>
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
        >There are {{ availability }} {{ getNameRoom(checkReservation.room_type_id) }} rooms available. Do you want to reserve a room?</p>
        <p class="lead" v-else>No rooms available.</p>

        <button
          class="btn btn-primary btn-lg btn-block"
          v-if="availability > 0 && !reserve"
          @click="Takereservation(checkReservation.room_type_id)"
        >Take a room</button>

        <form class="needs-validation" @submit.prevent="reserveRoom" v-if="reserve">
          <div class="row">
            <div class="col-md-12 mb-3">
              <label for="customer-name">Customer name</label>
              <input
                class="form-control"
                type="text"
                id="customer-name"
                v-model="reservation.client_name"
              />
              <small
                v-if="error && errors['client_name']"
                class="form-text text-danger"
              >{{ errors['client_name'][0] }}</small>
            </div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="submit">Reserve</button>
        </form>
      </div>
    </div>

    <div class="row bg-white p-3 rounded shadow mb-5" v-if="thereResults">
      <div class="col-md-12">
        <div class="alert alert-info" role="alert">
          <h4 class="alert-heading">Reserve successfully created</h4>
          <p>The reservation for {{ result.client_name }} in a {{ getNameRoom(result.room_type_id)}} room has been made successfully, for the period from {{ result.check_in_at }} to {{ result.check_in_at }}</p>

          <button @click="create()" class="btn btn-primary">Create new reservation</button>
        </div>
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
      reserve: false,
      checkReservation: {
        room_type_id: null,
        check_in_at: null,
        check_out_at: null
      },
      reservation: {
        client_name: ""
      },
      result: null,
      thereResults: false
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

    Takereservation(id) {
      this.reserve = true;
    },

    getNameRoom(id) {
      return this.roomTypes.find(roomType => roomType.id == id).name;
    },

    reserveRoom() {
      axios
        .post("/api/room/reservation", {
          ...this.reservation,
          ...this.checkReservation
        })
        .then(response => {
          let { reservation } = response.data;
          this.result = reservation;
          this.thereResults = true;
          this.clean();
        })
        .catch(error => {
          let { errors } = error.response.data;
          this.error = true;
          this.errors = errors;
        });
    },

    create() {
      this.thereResults = false;
      this.result = null;
    },

    clean() {
      this.checkReservation = {
        room_type_id: null,
        check_in_at: null,
        check_out_at: null
      };

      this.reservation = {
        client_name: ""
      };

      this.check = false;
      this.error = false;
    }
  },

  mounted() {
    this.fetchRoomTypes();
  }
};
</script>
