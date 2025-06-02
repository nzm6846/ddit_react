package shop.ingong.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import shop.ingong.myba.DaoMem;
import shop.ingong.myba.MemVo;
@Slf4j
@RestController
public class MyAjaxController {
	
	DaoMem de = new DaoMem();
	

	
	@GetMapping("/mem_list.ajax")
	public List<MemVo> mem_list_ajax() {
		List<MemVo> memList = de.selectList();

		return memList; 
	}
	
	@PostMapping("/mem_detail.ajax")
	public MemVo mem_detail_ajax(@RequestBody MemVo memVo) {
		return de.select(memVo);
	}
	
	@PostMapping("/mem_add.ajax")
	public int mem_add_ajax(@RequestBody MemVo memVo) {

		int cnt = de.insert(memVo);
		return cnt;
	}
	
	@PostMapping("/mem_del.ajax")
	public int mem_del_ajax(@RequestBody MemVo memVo) {

		int cnt = de.delete(memVo);
		return cnt;
	}
	
	@PostMapping("/mem_mod.ajax")
	public int mem_mod_ajax(@RequestBody MemVo memVo) {
		int cnt = de.update(memVo);
		return cnt;
	}
}
