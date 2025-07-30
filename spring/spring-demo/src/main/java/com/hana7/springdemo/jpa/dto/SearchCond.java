package com.hana7.springdemo.jpa.dto;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SearchCond {
	private String searchNickname;
	private String searchEmail;

	@Builder.Default
	private Integer page = 1;
	@Builder.Default
	private Integer size = 1;
	@Builder.Default
	private String sortField = "id";
	@Builder.Default
	private String sortDirection = "desc";

	public Pageable getPager() {
		Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortField);

		return PageRequest.of(page - 1, size, sort);
	}
}
