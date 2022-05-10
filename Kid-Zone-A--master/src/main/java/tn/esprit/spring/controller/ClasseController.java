package tn.esprit.spring.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.Iservice.IClasse;
import tn.esprit.spring.entity.Classe;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/classe")
public class ClasseController { 
	
	@Autowired
	IClasse classeService;
	
	// http://localhost:8086/SpringMVC/classe/all-classes
		@GetMapping("/all-classes")
		@ResponseBody
		public List<Classe> getAllClasses() {
			List<Classe> list = classeService.retreiveAllClasse();
			return list;
		}
		
		
		// http://localhost:8086/SpringMVC/classe/add-classe
		@PostMapping("/add-classe")
		@ResponseBody
		public Classe addClasse(@RequestBody Classe s) {
			Classe classe = classeService.addClasse(s);
			return classe;
		}
		
		
		// http://localhost:8086/SpringMVC/classe/remove-classe/{classe-id}
		@DeleteMapping("/remove-classe/{classe-id}")
		public void removeClasse(@PathVariable("classe-id") Long classeId) {
			classeService.deleteClasse(classeId);
		}
		
		
		// http://localhost:8086/SpringMVC/classe/modify-classe
		@PutMapping("/update-classe")
		@ResponseBody
		public Classe modifyClasse(@RequestBody Classe classe) {
			return classeService.updateClasse(classe);
		}
		
		
		// http://localhost:8086/SpringMVC/classe/retrieve-classe/8
		@GetMapping("/retrieve-classe/{classe-id}")
		@ResponseBody
		public Classe retrieveClasse(@PathVariable("classe-id") Long classeId) {
			return classeService.getClasseById(classeId);
		}
		
		@GetMapping("/getClasseByLabel")
		@ResponseBody
		public List<Classe> getClasseByLabel(){
			return classeService.getAllClasseLabel();
		}

		@GetMapping("/getClasseDesc")
		@ResponseBody
		public List<Classe> getClasseDesc(){
			return classeService.getLabelDesc();
		}
		
		@GetMapping("/rechercheClasse/{classe-label}")
		public List <Classe> rechercheClasse(@PathVariable("classe-label") String label) {
			return classeService.rechercheClasse(label);
		}


}



