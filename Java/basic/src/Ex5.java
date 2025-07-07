public class Ex5 {
    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.print("구구단의 시작단 입력 -->");
//        int start = scanner.nextInt();
//        System.out.print("구구단의 끝단 입력 -->");
//        int end = scanner.nextInt();
//
//        for (int i = start; i <= end; i++) {
//
//            for (int j = 11; j < 20; j++) {
//                System.out.printf("%d * %d = %d%n", i, j, i * j);
//            }
//        }

        short dan = 11;
        while (dan <= 19) {
            System.out.printf("%n%d단%n", dan);
            for (short i = 1; i <= 9; i++) {
                System.out.printf("%2d x %d = %3d%n", dan, i, dan * i);
            }
            dan++;
        }
    }
}