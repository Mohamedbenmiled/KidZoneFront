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


import tn.esprit.spring.Iservice.IEnfant;

import tn.esprit.spring.entity.Enfants;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/enfants")
public class EnfantController {
	
	@Autowired
	IEnfant enfantService;
	
	// http://localhost:8086/SpringMVC/enfants/all-enfants
			@GetMapping("/all-enfants")
			@ResponseBody
			public List<Enfants> getEnfants() {
				List<Enfants> list = enfantService.retreiveAllEnfant();
				return list;
			}
			
			
			// http://localhost:8086/SpringMVC/enfants/add-enfants
			@PostMapping("/add-enfant")
			@ResponseBody
			public Enfants addEnfant(@RequestBody Enfants s) {
				Enfants enfant = enfantService.addEnfant(s);
				return enfant;
			}
			
			
			// http://localhost:8086/SpringMVC/enfants/remove-enfants/{enfants-id}
			@DeleteMapping("/remove-enfants/{enfants-id}")
			@ResponseBody
			public void removeEnfant(@PathVariable("enfants-id") Long enfantId) {
				enfantService.deleteEnfant(enfantId);
			}
			
			
			// http://localhost:8086/SpringMVC/enfants/modify-enfants
			@PutMapping("/update-enfants")
			@ResponseBody
			public Enfants modifyEnfant(@RequestBody Enfants enfant) {
				return enfantService.updateEnfant(enfant);
			}
			
			
			// http://localhost:8086/SpringMVC/enfants/retrieve-enfant/8
			@GetMapping("/retrieve-enfants/{enfants-id}")
			@ResponseBody
			public Enfants retrieveEnfant(@PathVariable("enfants-id") Long enfantId) {
				return enfantService.getEnfantById(enfantId);
			}
			
			@GetMapping("/getNomAsc")
			@ResponseBody
			public List<Enfants> getNomAsc(){
				return enfantService.getNomAsc();
			}

			@GetMapping("/getNomDesc")
			@ResponseBody
			public List<Enfants> getNomDesc(){
				return enfantService.getNomDesc();
			}
			
			@GetMapping("/rechercheEnfant/{enfants-nom}")
			public List <Enfants> rechercheEnfant(@PathVariable("enfants-nom") String nom) {
				return enfantService.rechercheEnfant(nom);
			}
			

}
