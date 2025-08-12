package com.hana7.hanaro.product.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hana7.hanaro.common.dto.SearchCond;
import com.hana7.hanaro.product.dao.ItemDAO;
import com.hana7.hanaro.product.dto.ItemDTO;
import com.hana7.hanaro.product.dto.ItemRequestDTO;
import com.hana7.hanaro.product.dto.ItemResponseDTO;
import com.hana7.hanaro.product.dto.ItemResponseDetailDTO;
import com.hana7.hanaro.common.dto.PageResponseDTO;
import com.hana7.hanaro.product.entity.Item;
import com.hana7.hanaro.product.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService{
	private final ItemRepository repository;
	private final ItemDAO dao;

	public ItemServiceImpl(ItemRepository repository, ItemDAO dao) {
		this.repository = repository;
		this.dao = dao;
	}
	private static final int listSize = 10;

	@Override
	public List<ItemResponseDTO> getItemList(int page, int listSize) {
		Page<Item> results = repository.findAll(
			PageRequest.of(page - 1, listSize, Sort.by(Sort.Order.desc("id"))));

		return new PageResponseDTO<>(results, ItemServiceImpl::toDTO).getDtoList();
	}

	@Override
	public ItemResponseDTO getItemDetail(long id) {
		return repository.findById(id).map(ItemServiceImpl::toDetailDTO).orElse(null);
	}

	@Override
	public List<ItemDTO> findAll(SearchCond searchCond) {
		List<Item> items;
		if (searchCond.needSearch()) {
			items = dao.findAll(searchCond);
		} else {
			items = dao.findAll(searchCond.getPager());
		}

		return items.stream()
			.map(ItemServiceImpl::DTO).toList();
	}

	@Override
	public ItemResponseDetailDTO addItem(ItemRequestDTO requestDTO) {
		Item item = toEntity(requestDTO);

		return toDetailDTO(repository.save(item));
	}

	@Override
	public ItemResponseDetailDTO editItem(ItemRequestDTO requestDTO) {
		Item item = repository.findById(requestDTO.getId()).orElseThrow();
		item.setPrice(requestDTO.getPrice());
		item.setStock(requestDTO.getStock());
		item.setDescription(requestDTO.getDescription());

		return toDetailDTO(repository.save(item));
	}

	@Override
	public void removeItem(long id) {
		repository.deleteById(id);
	}

	public static ItemDTO DTO (Item item){
		return ItemDTO.builder()
			.id(item.getId())
			.name(item.getName())
			.price(item.getPrice())
			.stock(item.getStock())
			.build();
	}

	public static ItemResponseDTO toDTO (Item item){
		return ItemResponseDTO.builder()
			.id(item.getId())
			.name(item.getName())
			.price(item.getPrice())
			.stock(item.getStock())
			.build();
	}

	public static ItemResponseDetailDTO toDetailDTO (Item item){
		return ItemResponseDetailDTO.builder()
			.id(item.getId())
			.name(item.getName())
			.price(item.getPrice())
			.stock(item.getStock())
			.description(item.getDescription())
			.createdAt(item.getCreatedAt())
			.updatedAt(item.getUpdatedAt())
			.build();
	}

	private Item toEntity(ItemRequestDTO dto) {
		return Item.builder()
			.name(dto.getName())
			.price(dto.getPrice())
			.stock(dto.getStock())
			.description(dto.getDescription())
			.build();
	}
}
