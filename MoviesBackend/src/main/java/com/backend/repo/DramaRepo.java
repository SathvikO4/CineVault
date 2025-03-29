package com.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.entity.Drama;

public interface DramaRepo extends JpaRepository<Drama, Long> { }
