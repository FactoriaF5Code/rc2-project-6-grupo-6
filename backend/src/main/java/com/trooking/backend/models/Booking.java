package com.trooking.backend.models;

import static jakarta.persistence.GenerationType.IDENTITY;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {

    public Booking() {
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private Long hotelId;
    private LocalDate entryDay;
    private LocalDate exitDay;

    public Long getId() {
        return id;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public LocalDate getEntryDay() {
        return entryDay;
    }

    public LocalDate getExitDay() {
        return exitDay;
    }

    public String getCustomerName() {
        return "Pepito Pérez";
    }

}
