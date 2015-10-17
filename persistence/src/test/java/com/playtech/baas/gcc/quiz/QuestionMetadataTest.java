package com.playtech.baas.gcc.quiz;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.time.Instant;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class QuestionMetadataTest {

    QuestionMetadata questionMetadata;

    Instant now = Instant.now();

    @Before
    public void setUp() throws Exception {
        questionMetadata = new QuestionMetadata(1, 1, now);
    }

    @After
    public void tearDown() throws Exception {
        questionMetadata = null;
    }

    @Test
    public void setQuestionMetadataNotNull() {
        assertNotNull(questionMetadata);
    }

    @Test
    public void getQuestionMetadataId() {
        assertEquals(1, questionMetadata.getId());
    }

    @Test
    public void testGetQuestionId() throws Exception {
        assertEquals(1, questionMetadata.getQuestionId());
    }

    @Test
    public void testSetQuestionId() throws Exception {
        assertEquals(now, questionMetadata.getCreated());
    }
}