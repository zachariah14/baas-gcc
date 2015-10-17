package com.playtech.baas.gcc.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="JAVA_SCRIPT_QUEST")
public class JavaScriptQuest implements Serializable {

    @Id
    @GeneratedValue
    @Column(name="QUEST_ID")
    private Long questId;

    @Column
    private String question;

    @Column
    private String answer;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "javaScriptQuest")
    @JsonManagedReference
    private Set<Answer> answerOptions = new HashSet<>();

    public JavaScriptQuest() {}

    public JavaScriptQuest(String question, String answer, Set<Answer> answers) {
        this.question = question;
        this.answer = answer;
        this.answerOptions = answers;
    }

    public Long getId() {
        return questId;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public Set<Answer> getAnswerOptions() {
        return this.answerOptions;
    }

    public void setAnswerOptions(Set<Answer> answerOptions) {
        this.answerOptions = answerOptions;
    }
}
