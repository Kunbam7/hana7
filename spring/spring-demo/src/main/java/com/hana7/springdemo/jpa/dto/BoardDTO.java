package com.hana7.springdemo.jpa.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class BoardDTO {

	private Long bno;

	@NotNull
	private String title;

	@NotNull
	private String content;

	@NotNull
	private String writer;
}
