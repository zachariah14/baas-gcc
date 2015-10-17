package com.playtech.baas.gcc.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="ANSWER")
public class Answer implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "ANSWER_ID")
    Long answerId;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = JavaScriptQuest.class)
    @JoinColumn(name="QUEST_ID")
    @JsonBackReference
    JavaScriptQuest javaScriptQuest;

    @Column
    String answer;

    public Answer(){}

    public Answer(String answer) {
        this.answer = answer;
    }

    public Long getId() {
        return answerId;
    }

    public void setId(Long id) {
        this.answerId = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String option) {
        this.answer = option;
    }

    public JavaScriptQuest getJavaScriptQuest() {
        return javaScriptQuest;
    }

    public void setJavaScriptQuest(JavaScriptQuest javaScriptQuest) {
        this.javaScriptQuest = javaScriptQuest;
    }


}
