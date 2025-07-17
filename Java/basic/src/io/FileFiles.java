package io;

import java.io.File;

public class FileFiles {
	public static void main(String[] args) {
		File file = new File("./tmp/system.ini");
		String res = file.isFile() ? "파일" : "디렉토리";
		System.out.println("res = " + res);


		Files.copy()
	}
}
