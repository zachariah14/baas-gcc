package com.playtech.baas.gcc.controller;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import com.playtech.baas.gcc.domain.Message;
import com.playtech.baas.gcc.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/message")
public class MessageController {
    private static final int DEFAULT_PAGE_SIZE = 5;

    private MessageRepository messageRepository;

    @Autowired
    public MessageController(final MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @RequestMapping(value = "/list/{page}", method = RequestMethod.GET)
    public Page<Message> list(@PathVariable int page) {
        return messageRepository.findAll(new PageRequest(page, DEFAULT_PAGE_SIZE));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Message> all() {
        return Lists.newArrayList(messageRepository.findAll());
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Message get(@PathVariable Long id) {
        return messageRepository.findOne(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Map<String, Object> create(@RequestBody Message message) {
        Message newMessage = messageRepository.save(message);
        return new ImmutableMap.Builder<String, Object>().
                put("created", newMessage != null).
                put("newMessage", newMessage).build();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        messageRepository.delete(id);
    }
}
