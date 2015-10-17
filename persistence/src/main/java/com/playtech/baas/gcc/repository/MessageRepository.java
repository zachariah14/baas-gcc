package com.playtech.baas.gcc.repository;

import com.playtech.baas.gcc.domain.Message;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MessageRepository extends PagingAndSortingRepository<Message, Long> {
}
