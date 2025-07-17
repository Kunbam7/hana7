package io;

import java.io.PrintStream;

public class streamPractice {
	public static void main(String[] args) {
		PrintStream out = System.out;
		out.write(65);
		out.close();
	}
}
