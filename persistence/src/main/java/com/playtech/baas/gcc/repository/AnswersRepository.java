package com.playtech.baas.gcc.repository;


import com.playtech.baas.gcc.domain.Answer;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AnswersRepository extends PagingAndSortingRepository<Answer, Long> {
}
