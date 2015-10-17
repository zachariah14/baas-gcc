package com.playtech.baas.gcc.controller;

import com.google.common.collect.Sets;
import com.playtech.baas.gcc.domain.JavaScriptQuest;
import com.playtech.baas.gcc.repository.JavaScriptQuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/java_script_quest")
public class QuestController {
    private static final int DEFAULT_PAGE_SIZE = 5;

    private JavaScriptQuestRepository repo;

    @Autowired
    public QuestController(JavaScriptQuestRepository repo) {
        this.repo = repo;
    }

    @RequestMapping(value = "/list/{page}", method = RequestMethod.GET)
    public Page<JavaScriptQuest> list(@PathVariable int page) {
        return repo.findAll(new PageRequest(page, DEFAULT_PAGE_SIZE));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Set<JavaScriptQuest> all() {
        return Sets.newConcurrentHashSet(repo.findAll());
    }

}
