package com.playtech.baas.gcc.repository;

import com.playtech.baas.gcc.domain.Currency;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CurrencyRepository extends PagingAndSortingRepository<Currency, Long> {
}
