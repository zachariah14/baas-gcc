package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class QuizTest {

    private Quiz quiz;

    @Before
    public void setUp() {
        quiz = new Quiz(1, "TestQuiz");
    }

    @After
    public void tearDown() {
        quiz = null;
    }

    @Test
    public void testQuizNotNull() {
        assertNotNull(quiz);
    }

    @Test
    public void testGetName() throws Exception {
        assertEquals("TestQuiz", quiz.getName());
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, quiz.getId());
    }
}