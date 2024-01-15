package com.trooking.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.trooking.backend.models.Booking;
import com.trooking.backend.models.BookingRepository;

@RestController
public class BookingController {

    private BookingRepository repository;

    public BookingController(@Autowired BookingRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/bookings") 
    public List<Booking> allBooking() {
        return repository.findAll();
    }

    @PostMapping("/api/bookings")
    public Booking createBooking(@RequestBody Booking booking) {
        var createdBooking = repository.save(booking);
        return createdBooking;
    }

}
