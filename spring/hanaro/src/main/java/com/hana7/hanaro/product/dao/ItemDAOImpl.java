package com.hana7.hanaro.product.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.hana7.hanaro.common.dto.SearchCond;
import com.hana7.hanaro.product.entity.Item;
import com.hana7.hanaro.product.entity.QItem;
import com.hana7.hanaro.product.repository.ItemRepository;
import com.querydsl.core.BooleanBuilder;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ItemDAOImpl implements ItemDAO {
	private final ItemRepository repository;

	@Override
	public List<Item> findAll(SearchCond searchCond) {
		QItem qm = QItem.item;
		BooleanBuilder bb = new BooleanBuilder();

		if (StringUtils.hasText(searchCond.getSearchName())) {
			bb.and(qm.name.contains(searchCond.getSearchName()));
		}

		return repository.findAll(bb, searchCond.getPager()).stream().toList();
	}

	@Override
	public List<Item> findAll(Pageable pager) {
		return repository.findAll(pager).stream().toList();
	}

	@Override
	public Item findOne(long id) {
		return repository.findById(id).orElse(null);
	}
}
