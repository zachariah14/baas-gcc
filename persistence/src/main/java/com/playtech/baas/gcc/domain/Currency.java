package com.playtech.baas.gcc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Currency implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Column()
    private String cur_name;

    @Column()
    private String cur_type;

    @Column()
    private String cur_min;

    @Column()
    private String cur_max;

    protected Currency() {

    }

    public Currency(String name, String type, String min, String max) {
        this.cur_name = name;
        this.cur_type = type;
        this.cur_min = min;
        this.cur_max = max;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return cur_name;
    }

    public String getType() {
        return cur_type;
    }

    public String getMin() {
        return cur_min;
    }

    public String getMax() {
        return cur_max;
    }
}
