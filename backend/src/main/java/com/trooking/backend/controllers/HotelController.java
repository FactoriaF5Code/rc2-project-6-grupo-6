package com.trooking.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.trooking.backend.models.Hotel;
import com.trooking.backend.models.HotelRepository;

@RestController
public class HotelController {

    private HotelRepository repository;

    public HotelController(@Autowired HotelRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/hotels") 
    public List<Hotel> allHotels(){
        return repository.findAll();
    }

    @GetMapping("/api/hotels/{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        Optional<Hotel> maybeHotel = repository.findById(id);
        if (maybeHotel.isPresent()) {
            return ResponseEntity.ok(maybeHotel.get());
        }

        return ResponseEntity.notFound().build();
    }

    
}