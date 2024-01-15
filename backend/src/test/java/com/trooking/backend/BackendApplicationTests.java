package com.trooking.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.trooking.backend.models.BookingRepository;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

	@Autowired
	private MockMvc api;

	@Autowired
	private BookingRepository repository;



	@BeforeEach
	void setup() {
		repository.deleteAll();
	}

	@Test
	void returnsListOfHotels() throws Exception {

		api
				.perform(get("/api/hotels"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$", hasSize(4)),
						jsonPath("$[0].name", equalTo("Hotel Miami")),
						jsonPath("$[0].description", equalTo("Fabuloso")),
						jsonPath("$[0].pricePerNight", equalTo(300.0)),
						jsonPath("$[0].photoUrl", equalTo("placeholder")));

	}

	@Test
	void returnsHotelInfo() throws Exception {
		api
				.perform(get("/api/hotels/1"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$.name", equalTo("Hotel Miami")),
						jsonPath("$.description", equalTo("Fabuloso")),
						jsonPath("$.pricePerNight", equalTo(300.0)),
						jsonPath("$.photoUrl", equalTo("placeholder")));
	}

	@Test
	void returnsAnEmptyListOfBookings() throws Exception {

		api
				.perform(get("/api/bookings"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$", empty()));

	}

	@Test
	void savesBookings() throws Exception {

		var newBooking = "{ \"hotelId\": 1, \"entryDay\": \"2024-05-01\", \"exitDay\": \"2024-05-03\" }";

		api
				.perform(post("/api/bookings")
						.contentType(APPLICATION_JSON)
						.content(newBooking))
				.andExpectAll(
						status().isOk());

		api
				.perform(get("/api/bookings"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$", hasSize(1)),
						jsonPath("$[0].hotelId", equalTo(1)),
						jsonPath("$[0].entryDay", equalTo("2024-05-01")),
						jsonPath("$[0].exitDay", equalTo("2024-05-03")));

	}

}
