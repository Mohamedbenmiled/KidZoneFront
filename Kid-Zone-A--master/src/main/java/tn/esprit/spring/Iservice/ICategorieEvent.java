package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.CategorieEvent;


public interface ICategorieEvent {
	List<CategorieEvent> retrieveAllCategories();
	CategorieEvent addCategoriEvent (CategorieEvent c);
	CategorieEvent updateCategoriEvent (CategorieEvent c);
    void deleteCategoriEvent(Long id);
    CategorieEvent getCategoriEventById(Long id);

}
