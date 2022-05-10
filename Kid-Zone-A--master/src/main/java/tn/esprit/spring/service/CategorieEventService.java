package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.Iservice.ICategorieEvent;
import tn.esprit.spring.entity.CategorieEvent;
import tn.esprit.spring.repository.CategorieEventRepository;
@Service
public class CategorieEventService implements ICategorieEvent{
	
	@Autowired
	CategorieEventRepository CER;

	@Override
	public List<CategorieEvent> retrieveAllCategories() {
	
		List<CategorieEvent> listCategorieEvent = CER.findAll();
		for(CategorieEvent c : listCategorieEvent) {
			System.out.println(c);
		}
		return listCategorieEvent ;
	}

	@Override
	public CategorieEvent addCategoriEvent(CategorieEvent c) {
		CER.save(c);
		return c ;
	}

	@Override
	public CategorieEvent updateCategoriEvent(CategorieEvent c) {
		CER.save(c);
		return c ;
	}

	@Override
	public void deleteCategoriEvent(Long id) {
		CER.deleteById(id);
		
	}

	@Override
	public CategorieEvent getCategoriEventById(Long id) {
		CategorieEvent c = CER.findById(id).orElse(null);
		return c;
	}

}
