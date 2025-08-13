package com.hana7.hanaro.product.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.hana7.hanaro.product.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> , QuerydslPredicateExecutor<Item> {
	Page<Item> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
