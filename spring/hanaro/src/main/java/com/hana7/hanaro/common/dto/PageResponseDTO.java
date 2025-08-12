package com.hana7.hanaro.common.dto;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;

import lombok.Getter;

@Getter
public class PageResponseDTO<DTO, ENTITY> {
	private final List<DTO> dtoList;

	public PageResponseDTO(Page<ENTITY> results, Function<ENTITY, DTO> fn) {
		this.dtoList = results.stream().map(fn).collect(Collectors.toList());
	}


}
