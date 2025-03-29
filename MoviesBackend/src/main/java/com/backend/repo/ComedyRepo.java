package com.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.entity.Comedy;

public interface ComedyRepo extends JpaRepository<Comedy, Long> { }
