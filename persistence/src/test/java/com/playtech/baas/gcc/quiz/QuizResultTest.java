package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class QuizResultTest {

    private QuizResult quizResult;

    @Before
    public void setUp() throws Exception {
        quizResult = new QuizResult(1, 2);
    }

    @After
    public void tearDown() throws Exception {
        quizResult = null;
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, quizResult.getId());
    }

    @Test
    public void testGetQuiz() throws Exception {
        assertEquals(2, quizResult.getQuizId());
    }

}