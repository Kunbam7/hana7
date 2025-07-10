package oop;

public class ArrayedGeneralBook {
	private String names[];
	private String records[];

	public ArrayedGeneralBook(String[] names, String[] records) {
		this.names = names;
		this.records = records;
	}

	public static void main(String[] args) {
		String names[] = {"Sam", "Rhee", "Kim"};
		String records[] = {"1111", "2222", "3333"};
		ArrayedGeneralBook gb = new ArrayedGeneralBook(names, records);
		// System.out.println(gb.names());
	}
}
