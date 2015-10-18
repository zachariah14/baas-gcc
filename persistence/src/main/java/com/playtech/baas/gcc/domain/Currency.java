package com.playtech.baas.gcc.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="CURRENCY")
public class Currency implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String curname;

    @Column
    private String curtype;

    @Column
    private String curmin;

    @Column
    private String curmax;

    protected Currency() {

    }

    public Currency(String curname, String curtype, String curmin, String curmax) {
        this.curname = curname;
        this.curtype = curtype;
        this.curmin = curmin;
        this.curmax = curmax;
    }

    public Long getId() {
        return id;
    }

    public String getCurname() {
        return curname;
    }

    public String getCurtype() {
        return curtype;
    }

    public String getCurmin() {
        return curmin;
    }

    public String getCurmax() {
        return curmax;
    }
}
