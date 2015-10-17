package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class QuestionTest {


    private Question question;
    private QuestionType type = QuestionType.OneAnswerQuestion;

    @Before
    public void setUp() throws Exception {
        question = new Question(1, 1, "question", type);
    }

    @After
    public void tearDown() throws Exception {
        question = null;
    }

    @Test
    public void questionNotNull() {
        assertNotNull(question);
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, question.getId());
    }

    @Test
    public void testGetQuizId() throws Exception {
        assertEquals(1, question.getQuizId());
    }

    @Test
    public void testGetQuestionType() throws Exception {
        assertEquals(type, question.getQuestionType());
    }

    @Test
    public void testGetQuestion() throws Exception {
        assertEquals("question", question.getQuestion());
    }
}