package com.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.entity.SciFiMovies;

public interface SciFiRepo extends JpaRepository<SciFiMovies, Long> { }
