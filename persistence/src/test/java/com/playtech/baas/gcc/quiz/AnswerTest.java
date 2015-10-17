package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class AnswerTest {

    private Answer instance;

    @Before
    public void setUp() throws Exception {
        instance = new Answer(1, 1, "answer");
    }

    @After
    public void tearDown() throws Exception {
        instance = null;
    }

    @Test
    public void answerNotNull() {
        assertNotNull(instance);
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, instance.getId());
    }

    @Test
    public void testGetQuestionId() throws Exception {
        assertEquals(1, instance.getQuestionId());
    }

    @Test
    public void testGetAnswer() throws Exception {
        assertEquals("answer", instance.getAnswer());
    }
}