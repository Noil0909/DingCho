package com.example.back.controller;

import com.example.back.entity.QuizGame;
import com.example.back.service.QuizGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quizGame")
public class QuizGameController {
    @Autowired
    private QuizGameService quizGameService;

    @GetMapping
    public List<QuizGame> getAllQuizzes() {
        return quizGameService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public QuizGame getQuizGameById(@PathVariable Long id) {
        return quizGameService.getQuizGameById(id);
    }

    // 랜덤 문제 기능 구현하기
    /*
    @GetMapping("/random")
    public List<QuizGame> getRandomQuizzes(@RequestParam int numQuestions) {
        return quizGameService.getRandomQuizzes(numQuestions);
    }
     */

    @PostMapping
    public QuizGame createQuiz(@RequestBody QuizGame quizGame) {
        return quizGameService.saveQuizGame(quizGame);
    }

    @DeleteMapping("/{id}")
    public void deleteQuizGame(@PathVariable Long id) {
        quizGameService.deleteQuizGame(id);
    }
}
