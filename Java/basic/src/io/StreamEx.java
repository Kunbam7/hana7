package io;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

public class StreamEx {
	private static final String SRC_FILE = "./tmp.txt";
	private static final String DEST_FILE = "./tmp2.txt";

	public static void main(String[] args) throws IOException {
		// sysout();
		// bufFos();
		// sysinout();

		long startTime = System.currentTimeMillis();
		buffed();
		System.out.printf("EllapseTime is %d%n", System.currentTimeMillis());
	}

	private static void buffed() throws IOException {
		try (FileInputStream fis = new FileInputStream(SRC_FILE);
			 FileOutputStream fos = new FileOutputStream(DEST_FILE)) {
			int c = 0;
			byte[] buf = new byte[512];
			while ((c = fis.read(buf)) != -1) {
				fos.write(buf, 0, c);
				fos.write('\n');
			}
		} catch (IOException e) {
			e.printStackTrace(System.out);
		}
	}

	// most fast
	private static void bufByte() throws IOException {
		try (FileInputStream fis = new FileInputStream(SRC_FILE);
			 FileOutputStream fos = new FileOutputStream(DEST_FILE)) {
			int c = 0;
			byte[] buf = new byte[512];
			while ((c = fis.read(buf)) != -1) {
				fos.write(buf, 0, c);
				fos.write('\n');
			}
		} catch (IOException e) {
			e.printStackTrace(System.out);
		}
	}

	private static void sysinout() throws IOException {
		int b = 0;
		int len = 0;
		int[] buf = new int[100];
		System.out.println("---input stream---");
		while ((b = System.in.read()) != '\n') {
			System.out.printf("%c %d%n", (char)b, b);
			buf[len++] = b;
		}

		System.out.println("---output stream---");
		for (int i = 0; i < len; i++) {
			System.out.write(buf[i]);
		}

		System.out.close();
	}

	private static void bufFos() {
		int BS = 512;    // BufferSize
		long start = System.currentTimeMillis();
		try (FileOutputStream fos = new FileOutputStream("./tmp.txt")) {
			byte[] buf = new byte[BS];
			int idx = 0;
			for (int i = 0; i < 2 * 1024 * 1024; i++) {
				buf[idx++] = 65;
				if (idx == 85) {
					fos.write(65);
					idx = 0;
				}
			}

			// flush
			if (idx > 0) {
				fos.write(buf, 0, idx);    // idx++이라 그대로 사용
			}
		} catch (IOException e) {
			e.printStackTrace(System.out);
		}
		System.out.println(System.currentTimeMillis() - start);

		// or
		// FileOutputStream fos = new FileOutputStream("./tmp.txt");
		// for (int i = 0; i < 1024; i++) {
		// 	fos.write(65);
		// }
		// fos.close();
	}

	private static void sysout() throws IOException {
		byte[] buf = new byte[] {97, 98, 99};
		PrintStream out = System.out;
		out.println("PrintLN");
		// int는 4pyte -> 256
		out.write(65);
		out.write(1024);    // 문자ㅏ 인식 못함 -> 4바이트 초과
		out.write('\n');
		out.write(buf);
		out.write('\n');
		out.write('가');    // 한글은 2바이트 -> 잘림
		// out.flush();	// 앱의 경우, 앱 종료가 close다보니, flush만으로도 처리 가능
		out.close();    // flush 알아서함, 안붙임 마지막값 유실
	}
}
