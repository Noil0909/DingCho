package com.example.back.service;

import com.example.back.entity.QuizGame;
import com.example.back.repository.QuizGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class QuizGameService {
    @Autowired
    private QuizGameRepository quizGameRepository;

    public List<QuizGame> getAllQuizzes() {
        return quizGameRepository.findAll();
    }

    public QuizGame getQuizGameById(Long id) {
        return quizGameRepository.findById(id).orElse(null);
    }

    // 랜덤 문제 기능 구현 하기
    /*
    public List<QuizGame> getRandomQuizzes(int numQuestions) {
        List<QuizGame> quizzes = quizGameRepository.findAll();
        Collections.shuffle(quizzes);
        return quizzes.subList(0, Math.min(numQuestions, quizzes.size()));
    }
*/
    public QuizGame saveQuizGame(QuizGame quizGame) {
        return quizGameRepository.save(quizGame);
    }

    public void deleteQuizGame(Long id) {
        quizGameRepository.deleteById(id);
    }

}
