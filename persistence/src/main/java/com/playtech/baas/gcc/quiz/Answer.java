package com.playtech.baas.gcc.quiz;

public class Answer {

    private final long id;
    private final long questionId;
    private final String answer;

    public Answer(long id, long questionId, String answer) {
        this.id = id;
        this.questionId = questionId;
        this.answer = answer;
    }

    public long getId() {
        return id;
    }

    public long getQuestionId() {
        return questionId;
    }

    public String getAnswer() {
        return answer;
    }
}
