package com.hana7.hanaro.product.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
public class ItemResponseDetailDTO extends ItemResponseDTO {
	private String description;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
}
