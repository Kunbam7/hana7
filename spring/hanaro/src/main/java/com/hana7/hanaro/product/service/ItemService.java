package com.hana7.hanaro.product.service;

import java.util.List;

import com.hana7.hanaro.product.dto.ItemResponseDetailDTO;
import com.hana7.hanaro.product.dto.ItemRequestDTO;
import com.hana7.hanaro.product.dto.ItemResponseDTO;

public interface ItemService {
	List<ItemResponseDTO> getItemList(int page, int listSize);

	ItemResponseDTO getItemDetail(long id);

	ItemResponseDetailDTO findItem(long id);

	ItemResponseDetailDTO addItem(ItemRequestDTO requestDTO);

	ItemResponseDetailDTO editItem(ItemRequestDTO requestDTO);

	void removeItem(long id);
}
