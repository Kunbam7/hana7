package ex;

import java.text.DecimalFormat;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.StringTokenizer;

public class StringPlay {
	public static void main(String[] args) {
		String s = "Hello Senior Coding~ Coding";

		String s1 = s.concat(":contcat");
		System.out.println("s1: " + s1);
		String s2 = s + ":concat";
		System.out.println("s2 = " + s2);

		StringBuffer sb = new StringBuffer();
		sb.append("ABC");
		sb.append("EFG");
		System.out.println(sb.toString());

		// builder <>
		// long startTime = System.currentTimeMillis();
		// String x = "";
		// StringBuilder sb1 = new StringBuilder();
		// for (int i = 0; i < 10000; i++) {
		// 	x += "hi";
		// 	// sb1.append("hi");
		// }
		// System.out.println(System.currentTimeMillis() - startTime);

		// token
		String query = "abc=1235&dfas=3458";
		StringTokenizer st = new StringTokenizer(query, "&=");
		while (st.hasMoreElements()) {
			System.out.println(st.nextToken());
		}

		//Math
		double mr = Math.random();
		System.out.println("mr: " + mr);

		Format df = new DecimalFormat("#,###.0");
		String result = df.format(12345.19);
		System.out.println("result: " + result);

		Format sdf = new SimpleDateFormat("yyyy-MM-dd (E) h:mm:ss.S a [D]");
		System.out.println(sdf.format(new Date()));
	}
}
