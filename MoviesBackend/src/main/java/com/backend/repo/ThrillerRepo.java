package com.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.entity.Thriller;

public interface ThrillerRepo extends JpaRepository<Thriller, Long> { }
