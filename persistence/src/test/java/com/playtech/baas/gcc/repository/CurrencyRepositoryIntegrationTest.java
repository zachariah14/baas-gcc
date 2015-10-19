package com.playtech.baas.gcc.repository;

import com.playtech.baas.gcc.SpringApp;
import com.playtech.baas.gcc.domain.Currency;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringApp.class)
public class CurrencyRepositoryIntegrationTest {

    @Autowired
    CurrencyRepository currencyRepository;

    @Test
    public void shouldFindAllCurrencies() {
        //when:
        Page<Currency> currencies = currencyRepository.findAll(new PageRequest(0, 5));
        //then:
        assertThat(currencies.getTotalElements()).isEqualTo(4L);
    }

    @Test
    public void shouldFindCurrencyWithId() {
        //when:
        Currency currency = currencyRepository.findOne(0L);
        //then:
        assertThat(currency).isNotNull();
        assertThat(currency.getCurname()).isNotNull().isEqualTo("GRN");
    }

    @Test
    public void shouldReturnNullWhenMessageWithIdDoesNotExist() {
        //when:
        Currency currency = currencyRepository.findOne(999L);
        //then:
        assertThat(currency).isNull();
    }

}