package com.playtech.baas.gcc.repository;

import com.playtech.baas.gcc.SpringApp;
import com.playtech.baas.gcc.domain.Answer;
import com.playtech.baas.gcc.domain.JavaScriptQuest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringApp.class)
public class JavaScriptQuestRepositoryIntegrationTest {

    @Autowired
    JavaScriptQuestRepository repository;

    @Test
    public void shouldFindAllQuests() {
        //when:
        Page<JavaScriptQuest> quests = repository.findAll(new PageRequest(0, 1));
        //then:-
        assertThat(quests.getTotalElements()).isEqualTo(2L);
    }

    @Test
    public void findQuestWithId() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests).isNotNull();
        assertThat(quests.getQuestion()).isNotNull().isEqualTo("Question1");
    }

    @Test
    public void returnNullWhenQuestWithIdDoesNotExist() {
        //when:
        JavaScriptQuest quests = repository.findOne(999L);
        //then:
        assertThat(quests).isNull();
    }

    @Test
    public void checkQuestionIsNotNull() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests.getQuestion()).isNotNull();
    }

    @Test
    public void checkQuestionValue() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests.getQuestion()).isEqualTo("Question1");
    }

    @Test
    public void checkAnswerIsNotNull() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests.getAnswer()).isNotNull();
    }

    @Test
    public void checkAnswerValue() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests.getAnswer()).isEqualTo("Answer1");
    }

    @Test
     public void checkAnswersSetIsNotNull() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        assertThat(quests.getAnswerOptions()).isNotNull();
    }

    @Test
    public void checkAnswersSetSize() {
        //when:
        JavaScriptQuest quests = repository.findOne(1L);
        //then:
        assertThat(quests.getAnswerOptions()).hasSize(2);
    }

    @Test
    public void findAnswerStringFromSet() {
        //when:
        JavaScriptQuest quests = repository.findOne(0L);
        //then:
        List<String> answerList = new ArrayList<>();
        for (Answer answ : quests.getAnswerOptions()) {
            answerList.add(answ.getAnswer());
        }
        answerList.toArray(new String[answerList.size()]);
        assertThat(answerList).contains("QuestOption1", "QuestOption2");
    }

}