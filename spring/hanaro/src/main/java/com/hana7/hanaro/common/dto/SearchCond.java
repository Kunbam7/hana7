package com.hana7.hanaro.common.dto;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.util.StringUtils;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@ToString

public class SearchCond {
	private String searchName;
	private String searchEmail;
	private String searchUserId;

	@Builder.Default
	private Integer page = 1;
	@Builder.Default
	private Integer listSize = 10;
	@Builder.Default
	private String sortField = "id";
	@Builder.Default
	private String sortDirection = "desc";

	public boolean needSearch() {
		return StringUtils.hasText(searchName) || StringUtils.hasText(searchUserId) || StringUtils.hasText(searchEmail);
	}

	public Pageable getPager() {
		setDefault();
		Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortField);

		return PageRequest.of(page - 1, listSize, sort);
	}

	private void setDefault() {
		if (page == null)
			page = 1;
		if (listSize == null)
			listSize = 5;
		if (sortField == null)
			sortField = "id";
		if (sortDirection == null)
			sortDirection = "desc";
	}
}
