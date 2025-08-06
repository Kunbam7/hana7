package com.hana7.hanaro.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ItemImg {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String saveDir;

	@ManyToOne
	@JoinColumn(name = "item",
		foreignKey = @ForeignKey(
			name = "fk_ItemImage_item",
			foreignKeyDefinition = """
					foreign key (item)
					   references Item(id)
					    on DELETE cascade on UPDATE cascade
				"""
		)
	)
	private Item item;
}
