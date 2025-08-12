package com.hana7.hanaro.product.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ItemRequestDTO {
	private long id;

	@NotBlank
	@Size(min = 1, max = 20)
	private String name;

	@NotBlank
	private int price;

	@NotBlank
	private int stock;

	@Size(min = 1, max = 125)
	private String description;
}
