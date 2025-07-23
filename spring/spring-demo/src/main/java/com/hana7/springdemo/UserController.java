package com.hana7.springdemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.dto.User;

import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/users")
@Log4j2
public class UserController {
	@PostMapping("")
	public String registry(@RequestBody @Valid User user) {
		log.debug("user={}", user);

		return user.toString();
	}

	@GetMapping("/{id}")
	public String findUser(@PathVariable("id") Integer id) {
		log.info("GET={}", id);
		return id.toString();
	}
}
