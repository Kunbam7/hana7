package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.test.annotation.Rollback;

import com.hana7.springdemo.jpa.entity.Memo;

import jakarta.transaction.Transactional;

// @SpringBootTest
// @Transactional
// @DataJpaTest
// @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
// @Rollback(false)
class MemoRepositoryTest extends RepositoryTest {
	@Autowired
	MemoRepository repository;

	@Test
	@Order(1)
	void testClass() {
		Memo m = Memo.builder().memoText("TTT").build();
		Memo savedM = repository.save(m);
		assertEquals(m, savedM);

		Memo foundMemo = repository.findById(savedM.getMno()).orElseThrow();
		assertEquals(savedM, foundMemo);

		System.out.println("foundMemo = " + foundMemo);
		System.out.println("repository.getClass().getName() = " + repository.getClass().getName());

		foundMemo.setMemoText("New MemoText!!");
		repository.saveAndFlush(foundMemo);
		System.out.println("foundMemo = " + foundMemo);

		savedM.setMemoText("SSSS");
		repository.saveAndFlush(savedM);
		System.out.println("savedM = " + savedM);

		repository.deleteById(savedM.getMno());
		Optional<Memo> byId = repository.findById(savedM.getMno());

		byId.ifPresent(memo -> System.out.println("byId = " + memo));
	}

	@Test
	@Commit
	@Order(2)
	void add100Test() {
		List<Memo> list = Stream.iterate(1, n -> n + 1).limit(100)
			.map(n -> Memo.builder().memoText("Text" + n).build())
			.toList();

		repository.saveAll(list);

		assertEquals(100, repository.count());
	}

	@Test
	@Order(3)
	void pagingTest() {
		// Sort sorting = Sort.by("mno").descending();
		Sort sorting = getSorting("mno");
		Page<Memo> p1 = repository.findAll(getPageable(1, sorting));
		p1.stream().forEach(this::print);

		repository.findAll(getPageable(2, sorting)).stream().forEach(this::print);
	}

	@Test
	@Order(3)
	void queryMethodTest() {
		List<Memo> memo10To20 = repository.findByMnoBetweenOrderByMnoDesc(10, 20);
		printList(memo10To20);

		printList(repository.findByMnoBetween(2, 20, getSorting("memoText")));
	}

	private static Sort getSorting(String field) {
		return Sort.by(Sort.Order.desc(field));
	}

	private static Pageable getPageable(int pageNo, Sort sorting) {
		return PageRequest.of(pageNo - 1, 10, sorting);
	}


	private void printList(List<Memo> list) {
		list.forEach(this::print);
	}
	private void print(Memo memo) {
		System.out.println(memo.getMno() + " - " + memo.getMemoText());
	}
}
