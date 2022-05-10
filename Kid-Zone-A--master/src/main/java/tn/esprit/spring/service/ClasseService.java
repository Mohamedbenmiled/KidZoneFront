package tn.esprit.spring.service;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.Iservice.IClasse;
import tn.esprit.spring.entity.Classe;
import tn.esprit.spring.repository.ClasseRepository;


@Service
@Slf4j
public class ClasseService implements IClasse {
	@Autowired
	ClasseRepository CR;
	
	
	
	@Override
	public Classe addClasse(Classe c)  {
		
		CR.save(c);
		return null;
	}

	@Override
	public List<Classe> retreiveAllClasse() {
	List<Classe> listClasse = (List<Classe>) CR.findAll();
//		for(Classe c : listClasse) {
//		//	System.out.println(c);
//			log.info(c.toString());
//		}
		return  listClasse;
	}

	@Override
	public void deleteClasse(Long id) {
		CR.deleteById(id);
		
	}

	@Override
	public Classe updateClasse(Classe c) {
		return CR.save(c);
	}

	@Override
	public Classe getClasseById(Long id) {
		return CR.findById(id).orElse(null);
	}

	@Override
	public List<Classe> getAllClasseLabel(){
		return CR.getByLabelAsc();
	}

	@Override
	public List<Classe> getLabelDesc(){
		return CR.getByLabelDesc();
	}
	
	@Override
	public List<Classe> rechercheClasse(String label) {
		
		return CR.SearchByLabel(label);
	}

	
}
