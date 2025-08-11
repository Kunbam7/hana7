package com.hana7.hanaro.product.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
public class ItemResponseDTO {
	private Long id;
	private String name;
	private int price;
	private int stock;
}
