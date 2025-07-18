package io;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class NsLookup {
	public static void main(String[] args) throws UnknownHostException {
		if (args.length < 1) {
			System.out.println("Input the domain!");
			System.exit(0);
		}
		// String url = "https://hanabank.com/aaaaaaaaaaaa";
		String domain = args[0].replaceAll("https?://([^/?]+).*", "$1");    // 정규식 반드시 습득할것(back case)
		System.out.println("domain = " + domain);

		InetAddress[] ias = InetAddress.getAllByName(domain);
		for (InetAddress ia : ias) {
			System.out.println("HostName: " + ia.getHostName());
			System.out.println("HostName: " + ia.getHostAddress());
		}
	}
}
