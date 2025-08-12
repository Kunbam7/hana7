package com.hana7.hanaro.product.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.hana7.hanaro.common.dto.SearchCond;
import com.hana7.hanaro.product.entity.Item;

public interface ItemDAO {
	List<Item> findAll(SearchCond searchCond);

	List<Item> findAll(Pageable pager);

	Item findOne(long id);
}
