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
import tn.esprit.spring.Iservice.ICategorieEvent;
import tn.esprit.spring.entity.CategorieEvent;


@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/categorie-event")
public class CategorieEventController {
	
	
	@Autowired
	ICategorieEvent IC;
	
	@GetMapping("/all-Categorie-event")
	@ResponseBody
	public List<CategorieEvent> getCategorieEvents() {
		List<CategorieEvent> list = IC.retrieveAllCategories();
		return list;
	}
	
	@PostMapping("/add-categorie-event")
	@ResponseBody
	public CategorieEvent addCategorieEvent(@RequestBody CategorieEvent e) {
		CategorieEvent categorie = IC.addCategoriEvent(e);
		return categorie;
		}
	
	@DeleteMapping("/remove-categorie-event/{categorie-id}")
	@ResponseBody
	public void deleteCategorieEvent(@PathVariable("categorie-id") Long idCategorie) {
		IC.deleteCategoriEvent(idCategorie);
	}
	
	@PutMapping("/modify-categorie-event")
	@ResponseBody
	public CategorieEvent modifyCategorieEvent(@RequestBody CategorieEvent categorie) {
		return IC.updateCategoriEvent(categorie);
	}
	
	@GetMapping("/retrieve-categorie-event/{categorie-id}")
	@ResponseBody
	public CategorieEvent retrieveCategorieEvent(@PathVariable("categorie-id") Long idCategorie) {
		return IC.getCategoriEventById(idCategorie);
	}

}
