package com.hana7.springdemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@GetMapping("/hello")
	public String[] hello(String name) {
		return new String[] {"Hello", "World"};
	}
}
