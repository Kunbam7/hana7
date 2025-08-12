package com.hana7.hanaro.product.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
public class ItemDTO {
	private Long id;

	@NotBlank
	private String name;

	@NotNull
	private int stock;

	@NotNull
	private int price;

	private String description;

	// @NotNull
	private String uploadDir;

	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
}
