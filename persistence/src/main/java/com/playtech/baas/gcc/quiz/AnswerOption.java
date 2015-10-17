package com.playtech.baas.gcc.quiz;

public class AnswerOption {

    private final long id;
    private final long questionId;
    private final String answerOption;

    public AnswerOption(long id, long questionId, String answerOption) {
        this.id = id;
        this.questionId = questionId;
        this.answerOption = answerOption;
    }

    public long getId() {
        return id;
    }

    public String getAnswerOption() {
        return answerOption;
    }

    public long getQuestionId() {
        return questionId;
    }
}
