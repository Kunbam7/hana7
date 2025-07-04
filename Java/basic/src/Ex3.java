import java.util.Scanner;

public class Ex3 {
    static final String[] price = {"400,000원 지원", "600,000원 지원", "800,000원 지원", "1,000,000원 지원"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 국가재난금지원
        // if만 쓰기
//        System.out.print("인원 수를 입력하시오 -->>");
//        short num = scanner.nextShort();
//        if (num == 1) {
//            System.out.println("400,000원 지원");
//        } else if (num == 2) {
//            System.out.println("600,000원 지원");
//        } else if (num == 3) {
//            System.out.println("800,000원 지원");
//        } else {
//            System.out.println("1,000,000원 지원");
//        }
        // 배열쓰기
        System.out.print("인원 수를 입력하시오 -->>");
        short num = scanner.nextShort();

        if (num <= 3 && num > 0) {
            System.out.println(price[num - 1]);
        } else if (num > 4) {
            System.out.println(price[3]);
        } else {
            System.out.println("잘못된 값을 입력했습니다");
        }

        // 전기요금계산

        // if문만으로 계산
//        double fee = 0;
//        int basicFee = 0;
//        double calFee = 0;
//        System.out.print("전기 사용량을 입력하세요 -->>");
//        double useRate = scanner.nextDouble();
//
//        if (useRate <= 200) {
//            basicFee = 910;
//            fee = 99.3;
//            calFee = basicFee + useRate * fee;
//            System.out.printf("사용량: %.1fkmh %n기본요금: %d원 %n단가: %.1f원 %n전기요금: %.1f원", useRate, basicFee, fee, calFee);
//        } else if (useRate >= 201 && useRate <= 400) {
//            basicFee = 1600;
//            fee = 187.9;
//            calFee = basicFee + useRate * fee;
//            System.out.printf("사용량: %.1fkmh %n기본요금: %d원 %n단가: %.1f원 %n전기요금: %.1f원", useRate, basicFee, fee, calFee);
//        } else {
//            basicFee = 7300;
//            fee = 280.6;
//            calFee = basicFee + useRate * fee;
//            System.out.printf("사용량: %.1fkmh %n기본요금: %d원 %n단가: %.1f원 %n전기요금: %.1f원", useRate, basicFee, fee, calFee);
//        }
    }
}