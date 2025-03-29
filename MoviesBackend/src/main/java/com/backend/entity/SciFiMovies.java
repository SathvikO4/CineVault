package com.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "SciFiMovies")
public class SciFiMovies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String genre;
    private int release_year;
    private int duration;
    private String language;
    private String image_url;
    private String trailer;

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public int getRelease_year() { return release_year; }
    public int getDuration() { return duration; }
    public String getLanguage() { return language; }
    public String getImage_url() { return image_url; }
    public String gettrailer() { return trailer; } 
}
