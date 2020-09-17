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
      <h2>Reservation list</h2>
      <p class="lead">This list shows a detailed summary of all CHotel reservations</p>
    </div>
    <div class="row bg-white p-3 rounded shadow mb-5">
      <div class="col-md-12">
        <div
          class="alert alert-success mb-3"
          role="alert"
          v-if="success"
        >Reservation deleted successfully</div>
        <div class="alert alert-danger mb-3" role="alert" v-if="showError">{{ error }}</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Customer name</th>
              <th scope="col">type</th>
              <th scope="col">Checking</th>
              <th scope="col">Checkout</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation.id">
              <th scope="row">{{ reservation.client_name }}</th>
              <td>{{ reservation.room.name }}</td>
              <td>{{ reservation.check_in_at }}</td>
              <td>{{ reservation.check_out_at }}</td>
              <td>
                <button
                  class="btn btn-primary text-white btn-sm"
                  @click="editReservation(reservation)"
                >Edit</button>
                <button
                  class="btn btn-danger text-white btn-sm"
                  @click="remove(reservation.id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row bg-white p-3 rounded shadow mb-5" v-if="edit">
      <div class="col-md-12">
        <form class="needs-validation" @submit.prevent="update">
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
          <div class="row">
            <div class="col-md-12 mb-3">
              <label for="type-room">Type of room</label>
              <select
                class="custom-select d-block w-100"
                id="type-room"
                required
                v-model="reservation.room_type_id"
              >
                <option value="null">Choose...</option>
                <option
                  v-for="roomType in roomTypes"
                  :key="roomType.id"
                  :value="roomType.id"
                >{{ roomType.name }} Room</option>
              </select>
              <small
                v-if="errors['room_type_id']"
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
                v-model="reservation.check_in_at"
              />
              <small
                v-if="errors['check_in_at']"
                class="form-text text-danger"
              >{{ errors['check_in_at'][0] }}</small>
            </div>
            <div class="col-md-6 mb-3">
              <label for="checkout">Checkout</label>
              <input
                class="form-control"
                type="date"
                id="checkout"
                v-model="reservation.check_out_at"
              />
              <small
                v-if="errors['check_out_at']"
                class="form-text text-danger"
              >{{ errors['check_out_at'][0] }}</small>
            </div>
            <div class="col-12 col-sm-12">
              <a
                class="btn btn-primary btn-lg btn-block"
                @click="checkAvailability()"
              >Check availability</a>

              <div
                class="alert alert-success mb-3 mt-3"
                role="alert"
                v-if="availability && total > 0"
              >There are {{ total }} {{ reservation.room.name }} rooms available.</div>
              <div
                class="alert alert-danger mb-3 mt-3"
                role="alert"
                v-else-if="availability"
              >No rooms available.</div>
            </div>
          </div>
          <hr class="mb-4" />
          <div class="row">
            <div class="col-12 col-sm-6">
              <button
                class="btn btn-primary btn-lg btn-block"
                type="submit"
              >Save</button>
            </div>
            <div class="col-12 col-sm-6">
              <a class="btn btn-warning btn-lg btn-block" @click="cancel">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservation",
  data() {
    return {
      reservations: [],
      roomTypes: [],
      errors: [],
      error: false,
      showError: false,
      success: false,
      edit: false,
      reservation: null,
      errors: false,
      availability: false,
      total: 0
    };
  },
  methods: {
    async getReservations() {
      try {
        let { data } = await axios.get("/api/reservations");

        if (data.ok) {
          this.reservations = data.reservations;
        }
      } catch (error) {
        console.log(error);
      }
    },
    remove(id) {
      axios
        .delete(`/api/room/reservation/${id}`)
        .then(response => {
          this.reservations = response.data.reservations;
          this.success = true;

          setTimeout(() => {
            this.success = false;
          }, 5000);
        })
        .catch(error => {
          this.error = error.response.data.error;

          this.showError = true;

          setTimeout(() => {
            this.showError = false;
          }, 5000);
        });
    },
    editReservation(reservation) {
      this.fetchRoomTypes();
      this.edit = true;
      this.availability = false;
      this.reservation = { ...reservation };
    },
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
    cancel() {
      this.edit = false;
      this.reservation = null;
      this.availability = false;
    },
    checkAvailability() {
      let reservation = { ...this.reservation };
      delete reservation["client_name"];

      axios
        .get("/api/room/reservation/availability", {
          params: { ...reservation }
        })
        .then(response => {
          let { total } = response.data;

          this.total = total;
          this.errors = [];
          this.availability = true;
        })
        .catch(error => {
          let { errors } = error.response.data;
          this.errors = errors;
          this.availability = false;
        });
    },
    update() {
      axios
        .put(`/api/room/reservation/${this.reservation.id}`, this.reservation)
        .then(response => {
          if( response.data.ok) {
            this.reservations = response.data.reservations;
            this.edit = false;
            this.reservation = null;
            this.availability = false;
          }
        })
        .catch(error => {
          console.log(error.response);
          let { errors } = error.response.data;
          this.errors = errors;
        });
    }
  },

  mounted() {
    this.getReservations();
  }
};
</script>
