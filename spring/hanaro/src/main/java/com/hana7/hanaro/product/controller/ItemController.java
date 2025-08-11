package com.hana7.hanaro.product.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.hanaro.product.dto.ItemResponseDTO;
import com.hana7.hanaro.product.service.ItemService;

@RestController
@RequestMapping("/products" )
public class ItemController {
	private final ItemService service;

	public ItemController(ItemService service) {
		this.service = service;
	}

	@GetMapping
	public List<ItemResponseDTO> getItemList(int page, int listSize) {
		return service.getItemList(page, listSize);
	}

	@GetMapping("/{id}")
	public ItemResponseDTO getItemDetail(@PathVariable long id) {
		return service.getItemDetail(id);
	}

	private Path getTodayPath(String uploadPath) {
		LocalDateTime now = LocalDateTime.now();
		String path = String.format("%4d/%02d/%02d", now.getYear(),
			now.getMonthValue(), now.getDayOfMonth());
		System.out.println("path = " + path);
		return Paths.get(path);
	}
}

// 지금 아이템에서 있어야하는 기능 -> 등록,조회,수정,삭제,검색,상세정보
// 엔티티는 걍 지금이정도면 괜찮고
