package com.playtech.baas.gcc.quiz;

public class Quiz {

    private long id;
    private String name;

    public Quiz(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
