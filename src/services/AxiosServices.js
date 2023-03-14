import axios from "axios";

const BASE_Booking_URL = "http://localhost:3001/booking"
const BASE_USERS_URL = "http://localhost:3001/users"
class PmsServices {

    //Products Service Methods
    getAllBuses() {
        return axios.get(BASE_Booking_URL);
    }
    // getBusById(id) {
    //     return axios.get(BASE_Booking_URL + "/" + id)
    // }
    // updateBus(id, bus) {
    //     return axios.put(BASE_Booking_URL + "/" + id, bus)
    // }

    // deleteBus(id) {
    //     return axios.delete(BASE_Booking_URL + "/" + id)
    // }
    // addBus(bus) {
    //     return axios.post(BASE_Booking_URL, bus)
    // }
    updatedBookedSeats(id,seats) {
        return axios.patch(BASE_Booking_URL + "/" + id,seats)
    }



    //Users Service Methods

    getAllUsers() {
        return axios.get(BASE_USERS_URL);
    }
}

export default new PmsServices();