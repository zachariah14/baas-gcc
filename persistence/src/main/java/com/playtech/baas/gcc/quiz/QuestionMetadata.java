package com.playtech.baas.gcc.quiz;

import java.time.Instant;

public class QuestionMetadata{

    private final long id;
    private final long questionId;
    private final Instant created;

    public QuestionMetadata(long id, long questionId, Instant created) {
        this.id = id;
        this.questionId = questionId;
        this.created = created;
    }

    public long getQuestionId() {
        return questionId;
    }

    public long getId() {
        return id;
    }

    public Instant getCreated() {
        return created;
    }
}
