package com.hana7.hanaro.product.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Commit;
import org.springframework.test.annotation.Rollback;

import com.hana7.hanaro.product.entity.Item;
import com.hana7.hanaro.product.entity.ItemImg;

@Rollback(false)
class ItemRepositoryTest extends RepositoryTest {
	@Autowired
	ItemRepository repository;

	// @Test
	// @Commit
	// void imgTest() {
	// 	Item item = repository.findById(1L).orElseThrow();
	// 	List<ItemImg> itemImg = Stream.iterate(1, n -> n + 1)
	// 		.limit(10)
	// 		.map(n -> ItemImg.builder()
	// 			.fileName("fileName" + n)
	// 			.orgDir("2025/01/12")
	// 			.uploadDir("2025/01/12")
	// 			.item(item)
	// 			.build());
	// }

	@Test
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
	void editTest() {

		// assertEquals(10, repository.equals());
		assertEquals(10, repository.count());
		assertEquals(10, repository.count());
	}

	@Test
	@Commit
	void deleteTest() {
		long id = 1L;
		repository.deleteById(id);
		repository.findById(id).isPresent();
		assertFalse(repository.findById(id).isPresent());
	}
}
