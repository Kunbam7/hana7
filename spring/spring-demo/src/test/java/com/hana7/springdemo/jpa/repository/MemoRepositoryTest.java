package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import com.hana7.springdemo.jpa.entity.Memo;

import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional	// 스프링 테스트하면서 데이터 안남기는 방법
class MemoRepositoryTest {
	@Autowired	// injection 받기
	MemoRepository repository;

	@Test
	void testClass() {
		Memo m = Memo.builder().memoText("ttt").build();
		Memo savedM = repository.save(m);
		assertEquals(m, savedM);

		Memo foundMemo = repository.findById(savedM.getMno()).orElseThrow();
		assertEquals(savedM, foundMemo);
		System.out.println("foundMemo = " + foundMemo);

		System.out.println("repository.getClass().getName() = " + repository.getClass().getName());

		foundMemo.setMemoText("New MemoText");
		repository.save(foundMemo);	// commit 까지 진행
		System.out.println("foundMemo = " + foundMemo);

		savedM.setMemoText("ssss");
		repository.saveAndFlush(savedM);
		System.out.println("foundMemo = " + foundMemo);

		repository.deleteById(savedM.getMno());
		repository.findById(savedM.getMno());
		Optional<Memo> byId = repository.findById(savedM.getMno());

		// byId.ifPresent( Memo memo -> System.out.println("ById = " + memo));

		// // give
		// Memo m = Memo.builder().memoText("Hello").build();
		// Memo mno = Memo.builder().memoText("World").build();
		//
		// //when
		// Memo savedM = repository.save(m);
		// Memo savedMno = repository.save(mno);
		//
		// System.out.println("savedM = " + savedM);
		// System.out.println("savedMno = " + savedMno);
		//
		// //then
		// Memo foundM = repository.findById(savedM.getMno()).orElseThrow();
		// Memo foundMno = repository.findById(savedMno.getMno()).orElseThrow();
	}
}
