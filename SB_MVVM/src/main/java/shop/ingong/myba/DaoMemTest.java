package shop.ingong.myba;

import java.util.ArrayList;

public class DaoMemTest {
	public static void main(String[] args) {
		DaoMem de = new DaoMem();
		ArrayList<MemVo> memList = de.selectList();
		
		for(MemVo memVo : memList) {
			System.out.println("memVo:"+memVo);
		}
		
		
		
	}
}
