package com.hana7.hanaro.product.entity;

import com.hana7.hanaro.common.entity.BaseEntity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemImg extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String fileName;
	private String orgDir;
	private String uploadDir;

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
