package com.hana7.springdemo.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.hana7.springdemo.jpa.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long>,
	QuerydslPredicateExecutor<Member> {
	// Optional<Member> findById(Long id);
}
