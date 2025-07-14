package lamda;

import java.util.Comparator;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MyStream {
	public static void main(String[] args) {
		List<Integer> list = List.of(1, 10, 6, 3, 3, 5, 4, 2, 7, 7, 9, 8, 10);
		IntStream range1 = IntStream.range(1, 11);
		IntStream range2 = IntStream.rangeClosed(1, 10);

		System.out.println("짝수의 개수");
		Stream<Integer> istream = list.stream().filter(val -> val % 2 == 0);
		System.out.println("각 숫자를 제곱");
		list = list.stream().map(val -> val * val).toList();
		System.out.println("중복 제거");
		list.stream().distinct().toList();
		System.out.println("기본 정렬");
		list.stream().sorted().toList();
		System.out.println("역순(내림차순) 정렬");
		list.stream().sorted(Comparator.reverseOrder()).toList();
		System.out.println("처음 5개만 출력");
		list.stream().limit(5).toList();
		System.out.println("처음 5개 건너뛰고 출력");
		list.stream().skip(5).toList();
		System.out.println("값이 5보다 큰 것만 출력");
		list.stream().filter(val -> val > 5).toList();    //me
		// takeWhile, dropWhile은 순서에 영향을 받음( 첫번째가 거짓일째, 이후 확인없이 종료
		// list.stream().takeWhile(val -> val > 5).toList();    // 1
		// list.stream().dropWhile(val -> val <= 5).toList();    // 2
		System.out.println("list = " + list);
		System.out.println("list = " + list);
		System.out.println("1 ~ 10의 합계");
		// stream은 완료된 상태가 아니기 때문에 바로 sum()사용 불가?
		// System.out.println(range1.sum());	// me, 1
		list.stream().mapToInt(Integer::intValue).sum();    // 2
		System.out.println("random 5개의 평균");
		Stream.generate(Math::random).limit(5).mapToDouble(Double::doubleValue).average();
	}
}
