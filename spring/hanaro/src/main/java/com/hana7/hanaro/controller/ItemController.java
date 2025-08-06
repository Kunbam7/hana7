package com.hana7.hanaro.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

public class ItemController {


	private Path getTodayPath(String uploadPath) {
		LocalDateTime now = LocalDateTime.now();
		String path = String.format("%4d/%02d/%02d", now.getYear(),
			now.getMonthValue(), now.getDayOfMonth());
		System.out.println("path = " + path);
		return Paths.get(path);
	}
}
