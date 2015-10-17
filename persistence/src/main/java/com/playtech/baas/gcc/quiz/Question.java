package com.playtech.baas.gcc.quiz;

public class Question {

    private final long id;
    private final long quizId;
    private final String question;
    private final QuestionType questionType;

    public Question(long id, long quizId, String question, QuestionType questionType) {
        this.id = id;
        this.quizId = quizId;
        this.question = question;
        this.questionType = questionType;
    }

    public long getId() {
        return id;
    }

    public long getQuizId() {
        return quizId;
    }

    public String getQuestion() {
        return question;
    }

    public QuestionType getQuestionType() {
        return questionType;
    }

}
