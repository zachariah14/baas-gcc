package com.playtech.baas.gcc.quiz;

import java.time.Instant;

public class QuizMetadata {

    private final long id;
    private final long quizId;
    private final Instant createdDatetime;

    public QuizMetadata(long id, long quizId, Instant createdDatetime) {
        this.id = id;
        this.quizId = quizId;
        this.createdDatetime = createdDatetime;
    }

    public long getQuizId() {
        return quizId;
    }

    public long getId() {
        return id;
    }

    public Instant getCreatedDatetime() {
        return createdDatetime;
    }
}
