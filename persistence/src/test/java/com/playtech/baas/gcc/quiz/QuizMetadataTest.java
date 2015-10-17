package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.time.Instant;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class QuizMetadataTest {

    private QuizMetadata quizMetada;
    private Instant now = Instant.now();

    @Before
    public void setUp() {
        quizMetada = new QuizMetadata(1, 2, now);
    }

    @After
    public void tearDown() {
        quizMetada = null;
    }

    @Test
    public void testQuizMetadataNotNull() {
        assertNotNull(quizMetada);
    }

    @Test
    public void testGetId() throws Exception {
        assertEquals(1, quizMetada.getId());
    }

    @Test
    public void testGetQuizId() throws Exception {
        assertEquals(2, quizMetada.getQuizId());
    }

    @Test
    public void testGetInstant() throws Exception {
        assertEquals(now, quizMetada.getCreatedDatetime());
    }


}