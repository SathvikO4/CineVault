package com.backend.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.entity.Action;

public interface ActionRepo extends JpaRepository<Action, Long> { }
