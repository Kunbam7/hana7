package com.hana7.hanaro.cart.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.hana7.hanaro.product.entity.Item;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class CartItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cart",
		foreignKey = @ForeignKey(
			name = "fk_CartItem_cart",
			foreignKeyDefinition = """
					foreign key (cart)
					   references Cart(id)
					    on DELETE cascade on UPDATE cascade
				"""
		)
	)
	private Cart cart;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "item",
		foreignKey = @ForeignKey(
			name = "fk_CartItem_item",
			foreignKeyDefinition = """
					foreign key (item)
					   references Item(id)
					    on DELETE cascade on UPDATE cascade
				"""
		)
	)
	private Item item;
}
