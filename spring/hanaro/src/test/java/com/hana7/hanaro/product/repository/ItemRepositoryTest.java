package com.hana7.hanaro.product.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.Stream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Commit;
import org.springframework.test.annotation.Rollback;

import com.hana7.hanaro.product.entity.Item;

@Rollback(false)
class ItemRepositoryTest extends RepositoryTest {
	@Autowired
	ItemRepository repository;

	@Test
	@Order(1)
	void addTest() {
		repository.saveAll(
			Stream.iterate(1, n -> n + 1)
				.limit(100)
				.map(n -> Item.builder()
					.name("Product " + n)
					.stock(30)
					.price(30000)
					.description("Description " + n)
					.build())
				.toList());

		assertEquals(100, repository.count());
	}

	@Test
	@Order(2)
	void listTest() {
		// repository.findAll(
		//
		// )
	}

	@Test
	@Order(3)
	void searchTest() {

	}

	@Test
	@Order(4)
	void editTest() {

		// assertEquals(10, repository.equals());
		assertEquals(10, repository.count());
		assertEquals(10, repository.count());
	}

	@Test
	@Order(5)
	@Commit
	void deleteTest() {
		long id = 1L;
		repository.deleteById(id);
		repository.findById(id).isPresent();
		assertFalse(repository.findById(id).isPresent());
	}
}
