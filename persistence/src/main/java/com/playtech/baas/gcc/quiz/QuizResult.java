package com.playtech.baas.gcc.quiz;

public class QuizResult {

    private final long id;
    private final long quizId;

    public QuizResult(long id, long quizId) {
        this.id = id;
        this.quizId = quizId;
    }

    public long getId() {
        return id;
    }

    public long getQuizId() {
        return quizId;
    }


}
