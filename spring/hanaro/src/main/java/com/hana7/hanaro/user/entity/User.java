package com.hana7.hanaro.user.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@DynamicInsert
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {
	@Id
	private String userId;

	private String email;

	private String pwd;

	@ElementCollection(fetch = FetchType.LAZY)
	@JoinTable(name = "Role",
		joinColumns = @JoinColumn(name = "email")
	)
	@Column(name = "role")
	@Builder.Default
	private List<Role> roles = new ArrayList<>();

	public User addRole(Role role) {
		if (roles == null)
			roles = new ArrayList<>();
		roles.add(role);
		return this;
	}

	public void clearRoles() {
		if (roles != null)
			roles.clear();
	}
}
