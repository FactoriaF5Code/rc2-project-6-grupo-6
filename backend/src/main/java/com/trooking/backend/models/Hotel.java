package com.trooking.backend.models;

import static jakarta.persistence.GenerationType.IDENTITY;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    Long id;
    String name;
    String photoUrl;
    String description;
    Double pricePerNight;
    
    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }


    public String getPhotoUrl() {
        return photoUrl;
    }


    public String getDescription() {
        return description;
    }


    public Double getPricePerNight() {
        return pricePerNight;
    }

    public Hotel() {
    }

}
