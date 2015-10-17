package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AnswerOptionTest {

    private AnswerOption answerOption;

    @Before
    public void setUp() throws Exception {
        answerOption = new AnswerOption(1, 1, "answerOption");
    }

    @After
    public void tearDown() throws Exception {
        answerOption = null;
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, answerOption.getId());
    }

    @Test
    public void testGetQuestionId() throws Exception {
        assertEquals(1, answerOption.getQuestionId());
    }

    @Test
    public void testGetAnswerOption() throws Exception {
        assertEquals("answerOption", answerOption.getAnswerOption());
    }
}