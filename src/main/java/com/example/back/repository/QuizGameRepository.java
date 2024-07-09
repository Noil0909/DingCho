package com.example.back.repository;

import com.example.back.entity.QuizGame;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizGameRepository extends JpaRepository<QuizGame, Long> {
}
