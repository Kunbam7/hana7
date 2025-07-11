package collection.ex;

import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Score {

	public static String getGrade(int score) {
		return switch (score / 10) {
			case 10, 9 -> "A";
			case 8 -> "B";
			case 7 -> "C";
			case 6 -> "D";
			default -> "F";
		};
	}

	public static void main(String[] args) {
		List<Integer> scores = new LinkedList<>();    // 유연성, 다양성을 위해 List사용
		Scanner scanner = new Scanner(System.in);

		while (true) {
			System.out.print("점수를 입력하세요: ");
			int score = 0;
			try {
				score = Integer.parseInt(scanner.nextLine());
			} catch (NumberFormatException e) {
				System.out.println("점수는 숫자 0 ~ 100 사이로 입력해 주세요 (단, 음수는 종료");
				continue;
			}

			if (score < 0)
				break;

			scores.add(score);
		}

		for (int i = 0; i < scores.size(); i++) {
			int score = scores.get(i);
			System.out.printf("%d 학생의 성적은 %d점이며 학점은 %s이다%n", i, score, getGrade(score));
		}
	}
}
