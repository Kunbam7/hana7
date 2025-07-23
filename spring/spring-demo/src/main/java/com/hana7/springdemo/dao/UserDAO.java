package com.hana7.springdemo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.hana7.springdemo.dto.User;

@Repository
@Mapper
public class UserDAO {
	public User getUser();
	public User insert();
}
