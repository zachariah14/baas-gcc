package com.playtech.baas.gcc.repository;


import com.playtech.baas.gcc.SpringApp;
import com.playtech.baas.gcc.domain.Answer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by Andre on 5/30/2015.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringApp.class)
public class AnswerRepositoryIntegrationTest {

    @Autowired
    AnswersRepository repository;

    @Test
    public void shouldFindAllAnswers() {
        //when:
        Page<Answer> quests = repository.findAll(new PageRequest(0, 1));
        //then:
        assertThat(quests.getTotalElements()).isEqualTo(4L);
    }

    @Test
    public void findAnswerWithId() {
        //when:
        Answer answer = repository.findOne(0L);
        //then:
        assertThat(answer).isNotNull();
        assertThat(answer.getAnswer()).isNotNull().isEqualTo("QuestOption1");
    }

    @Test
    public void returnNullWhenAnswerWithIdDoesNotExist() {
        //when:
        Answer answer = repository.findOne(999L);
        //then:
        assertThat(answer).isNull();
    }

    @Test
    public void checkQuestFkIsNotNull() {
        //when:
        Answer answer = repository.findOne(0L);
        //then:
        assertThat(answer.getJavaScriptQuest()).isNotNull();
    }

    @Test
    public void checkQuestFkId() {
        //when:
        Answer answer = repository.findOne(0L);
        //then:
        assertThat(answer.getJavaScriptQuest().getId()).isEqualTo(0L);
    }

}