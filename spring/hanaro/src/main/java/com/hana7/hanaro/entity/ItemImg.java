package com.hana7.hanaro.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class ItemImg {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String imgRoute;
}
