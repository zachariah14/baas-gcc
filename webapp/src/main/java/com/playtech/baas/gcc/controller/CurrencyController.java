package com.playtech.baas.gcc.controller;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import com.playtech.baas.gcc.domain.Currency;
import com.playtech.baas.gcc.repository.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/currency")
public class CurrencyController {

    private static final int DEFAULT_PAGE_SIZE = 5;
    private CurrencyRepository currencyRepository;

    @Autowired
    public CurrencyController(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }


    @RequestMapping(value = "/list/{page}", method = RequestMethod.GET)
    public Page<Currency> list(@PathVariable int page) {
        return currencyRepository.findAll(new PageRequest(page, DEFAULT_PAGE_SIZE));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Currency> all() {
        return Lists.newArrayList(currencyRepository.findAll());
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Currency get(@PathVariable Long id) {
        return currencyRepository.findOne(id);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Map<String, Object> create(@RequestBody Currency currency) {
        Currency newCurrency = currencyRepository.save(currency);
        return new ImmutableMap.Builder<String, Object>().
                put("created", newCurrency != null).
                put("newCurrency", newCurrency).build();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        currencyRepository.delete(id);
    }

}
