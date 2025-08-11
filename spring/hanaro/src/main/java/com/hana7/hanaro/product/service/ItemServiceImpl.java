package com.hana7.hanaro.product.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hana7.hanaro.product.dto.ItemRequestDTO;
import com.hana7.hanaro.product.dto.ItemResponseDTO;
import com.hana7.hanaro.product.dto.ItemResponseDetailDTO;
import com.hana7.hanaro.product.dto.PageResponseDTO;
import com.hana7.hanaro.product.entity.Item;
import com.hana7.hanaro.product.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService{
	private final ItemRepository repository;
	public ItemServiceImpl(ItemRepository repository) {
		this.repository = repository;
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
	public ItemResponseDetailDTO findItem(long id) {
		return null;
	}

	@Override
	public ItemResponseDetailDTO addItem(ItemRequestDTO requestDTO) {
		return null;
	}

	@Override
	public ItemResponseDetailDTO editItem(ItemRequestDTO requestDTO) {
		return null;
	}

	@Override
	public void removeItem(long id) {

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
}
