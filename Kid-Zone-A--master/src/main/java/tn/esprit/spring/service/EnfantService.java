package tn.esprit.spring.service;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.Iservice.IEnfant;
import tn.esprit.spring.entity.Classe;
import tn.esprit.spring.entity.Enfants;
import tn.esprit.spring.repository.EnfantRepository;

@Service
@Slf4j
public class EnfantService implements IEnfant {
	
	@Autowired
	EnfantRepository ER;
	
	@Override
	public Enfants addEnfant(Enfants e)  {
		
		ER.save(e);
		return null;
	}

	@Override
	public List<Enfants> retreiveAllEnfant() {
		List<Enfants> listEnfant = (List<Enfants>) ER.findAll();
		for(Enfants e : listEnfant) {
		//	System.out.println(c);
			log.info(e.toString());
		}
		return listEnfant;
	}

	@Override
	public void deleteEnfant(Long id) {
		ER.deleteById(id);
		
	}

	@Override
	public Enfants updateEnfant(Enfants e) {
		return ER.save(e);
	}

	@Override
	public Enfants getEnfantById(Long id) {
		return ER.findById(id).orElse(null);
	}
	
	@Override
	public List<Enfants> getNomAsc(){
		return ER.getByNomAsc();
	}

	@Override
	public List<Enfants> getNomDesc(){
		return ER.getByNomDesc();
	}
	
	@Override
	public List<Enfants> rechercheEnfant(String nom) {
		
		return ER.SearchByNom(nom);
	}
	
	
		
		
	

	

	
}
