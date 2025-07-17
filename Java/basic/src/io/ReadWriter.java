package io;

import java.io.FileReader;

public class ReadWriter {
	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();

		FileReader in = null;
		try (FileReader into = new FileReader("./tmp/system.ini")){
			int c = 0;
			while((c = into.read()) != -1) {

			}
		} catch() {

		} finally {
			if(in != into.close();
		}

		System.out.printf("EllapseTime is %d%n", System.currentTimeMillis());
	}
}
