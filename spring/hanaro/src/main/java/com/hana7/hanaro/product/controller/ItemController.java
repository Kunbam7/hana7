package com.hana7.hanaro.product.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.hanaro.common.dto.SearchCond;
import com.hana7.hanaro.product.dto.ItemDTO;
import com.hana7.hanaro.product.dto.ItemRequestDTO;
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
	public List<ItemResponseDTO> getItemList(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int listSize) {
		return service.getItemList(page, listSize);
	}

	List<ItemDTO> findItems(SearchCond searchCond) {
		return service.findAll(searchCond);
	}

	@GetMapping("/{id}")
	public ItemResponseDTO getItemDetail(@PathVariable long id) {
		return service.getItemDetail(id);
	}

	@PostMapping
	public ItemResponseDTO addItem(@RequestBody @Validated ItemRequestDTO requestDTO) {

		return service.addItem(requestDTO);
	}

	@PatchMapping("/{id}")
	public ItemResponseDTO editItem(@PathVariable long id, @RequestBody @Validated ItemRequestDTO requestDTO) {
		requestDTO.setId(id);
		return service.editItem(requestDTO);
	}

	@DeleteMapping("/{id}")
	public int removeItem(@PathVariable int id) {
		service.removeItem(id);
		return id;
	}

	private Path getTodayPath(String uploadPath) {
		LocalDateTime now = LocalDateTime.now();
		String path = String.format("%4d/%02d/%02d", now.getYear(),
			now.getMonthValue(), now.getDayOfMonth());
		System.out.println("path = " + path);
		return Paths.get(path);
	}
}
