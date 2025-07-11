package book;

public class ArrayedGeneralBook implements GeneralBook {
	private static final int CAPACITY = 10;

	private String[] names;
	private String[] records;
	private int size;

	public ArrayedGeneralBook(String[] names, String[] records) {
		// 순수 함수가 아니여서 오염 위험성 있음
		// this.names = names;
		// this.records = records;

		if (names == null || records == null || names.length != records.length) {
			throw new IllegalArgumentException("Not valied names and records");
		}
		// 해결책
		this.size = names == null ? 0 : names.length;
		this.names = new String[this.size + CAPACITY];
		this.records = new String[this.size + CAPACITY];

		cloneStrings(names, this.names);
		cloneStrings(records, this.records);
	}

	@Override
	public int size() {
		return this.size();
	}

	private String joinStrings(String[] strs) {
		// 초반 사이즈 정해서 최적화(비용 감소)
		StringBuilder sb = new StringBuilder(size * 15);
		for (String s : strs) {
			sb.append(s).append(" ");
		}
		return sb.toString();
	}

	@Override
	public String names() {
		return joinStrings(names);
	}

	@Override
	public String records() {
		return "";
	}

	private int indexOf(String[] strs, String str) {
		for (int i = 0; i < strs.length; i++) {
			if (strs[i].equals(str)) {
				return i;
			}
		}
		return -1;
	}

	@Override
	public boolean nameExist(String name) {
		int idx = indexOf(names, name);
		return idx == -1;
	}

	private String[] cloneStrings(String[] sources) {
		String[] tmps = new String[size + (size >> 1)];
		return this.cloneStrings(sources, tmps);
	}

	private String[] cloneStrings(String[] sources, String[] targets) {
		System.arraycopy(sources, 0, targets, 0, this.size);
		return targets;
	}

	private void expand() {
		// String[] tmps = new String[size + size / 2];
		this.names = cloneStrings(this.names);
		this.records = cloneStrings(this.names);
	}

	@Override
	public void add(String name, String record) {
		int idx = indexOf(this.names, name);
		if (idx != -1)
			return;

		if (this.size == this.names.length)
			expand();

		this.names[size] = name;
		this.records[size] = record;
		this.size++;
	}

	@Override
	public void remove(String name) {

	}

	@Override
	public String get(String name) {
		return "";
	}

	@Override
	public void sort() {

	}

	@Override
	public void print() {

	}

	public static void main(String[] args) {
		String[] names = {"Sam", "Rhee", "Kim"};
		String[] records = {"111", "222", "333"};
		GeneralBook gb = new ArrayedGeneralBook(names, records);
		System.out.println("gb.names() = " + gb.names());
		names[1] = "LEE";
		System.out.println("gb.names() = " + gb.names());

		// 데이터 오염문제?
		// String[] tmps = new String[10];
		// int size = 3;
		// System.arraycopy(names, 0, tmps, 0, size);
		// System.out.println(Arrays.toString(names));
		// System.out.println(Arrays.toString(tmps));
		// tmps[size++] = "NewName";
		// System.out.println(Arrays.toString(tmps));
		// int idx = -1;
		// for (int i = 0; i < size; i++) {
		// 	if (tmps[i].equals("Rhee")) {
		// 		idx = i;
		// 		break;
		// 	}
		// }
		// System.out.println("idx = " + idx);
		// System.arraycopy(tmps, idx + 1, tmps, idx, size - idx - 1);
		// tmps[--size] = null;
		// System.out.println(Arrays.toString(tmps));
	}
}
