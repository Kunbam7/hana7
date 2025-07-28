package com.hana7.springdemo.jpa.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@EntityListeners(AuditingEntityListener.class)
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bno;

	@Column(length = 40, nullable = false)
	private String title;

	@Column(length = 1000, nullable = false)
	private String content;

	@Column(length = 40, nullable = false)
	private String writer;

	@CreatedDate
	@Column(name = "regdate", updatable = false)
	private LocalDateTime regDate;

	@Builder.Default
	private Integer hit = 0;
}
