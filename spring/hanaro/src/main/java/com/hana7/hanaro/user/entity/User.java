package com.hana7.hanaro.user.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;

@Builder
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String userId;

	private String pwd;

	@Column(name = "role")
	@Builder.Default
	private List<Role> roles = new ArrayList<>();

	public User addRole(Role role) {
		if (roles == null)
			roles = new ArrayList<>();
		roles.add(role);
		return this;
	}
}
