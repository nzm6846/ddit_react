package shop.ingong.demo;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import shop.ingong.dto.Store;
import shop.ingong.myba.DaoEmp;
import shop.ingong.myba.EmpVO;

@Controller
public class EmpController {
    @GetMapping("/emp_list.do")
    public String do_emp_list(Model model) {
    	DaoEmp de = new DaoEmp();
    	ArrayList<EmpVO> list = de.selectList();
    	model.addAttribute("list", list);
        return "emp_list";
    }
    
    @GetMapping("/emp_detail.do")
    public String do_emp_detail(Model model,EmpVO pvo) {
    	DaoEmp de = new DaoEmp();
    	EmpVO vo = de.select(pvo);
    	model.addAttribute("vo", vo);
        return "emp_detail";
    }
    
    @GetMapping("/emp_mod.do")
    public String do_emp_mod(Model model,EmpVO pvo) {
    	DaoEmp de = new DaoEmp();
    	EmpVO vo = de.select(pvo);
    	model.addAttribute("vo", vo);
        return "emp_mod";
    }
    

    @PostMapping("/emp_mod_act.do")
    public String do_emp_mod_act(Model model,EmpVO pvo) {
    	DaoEmp de = new DaoEmp();
    	int cnt = de.update(pvo);
    	model.addAttribute("cnt", cnt);
        return "emp_mod_act";
    }
    
    @GetMapping("/emp_add.do")
    public String do_emp_add(Model model,EmpVO pvo) {
        return "emp_add";
    }
    
    @PostMapping("/emp_add_act.do")
    public String do_emp_add_act(Model model,EmpVO pvo) {
    	DaoEmp de = new DaoEmp();
    	int cnt = de.insert(pvo);
    	model.addAttribute("cnt", cnt);
        return "emp_add_act";
    }
    
    @PostMapping("/emp_del_act.do")
    public String do_emp_del_act(Model model,EmpVO pvo) {
    	DaoEmp de = new DaoEmp();
    	int cnt = de.delete(pvo);
    	model.addAttribute("cnt", cnt);
        return "emp_del_act";
    }
    
    
}
