package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import tn.esprit.spring.Iservice.IEvent;
import tn.esprit.spring.entity.CategorieEvent;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.repository.CategorieEventRepository;
import tn.esprit.spring.repository.EventRepository;
@Service
@Slf4j
public class EventService implements IEvent {
	@Autowired
	EventRepository ER;
	
	@Override
	public List<Event> retrieveAllEvents() {
		List<Event> listEvent = ER.findAll();
		for(Event e : listEvent) {
			System.out.println(e);
		}
		return listEvent ;
	}
	

	@Override
	public Event addEvent(Event e) {
		ER.save(e);
		return e;
	}

	@Override
	public Event updateEvent(Event e) {
		ER.save(e);
		return null;
	}



	@Override
	public void deleteEvent(Long id) {
		ER.deleteById(id);
		
	}




	@Override
	public Event getEventById(Long id) {
		Event e = ER.findById(id).orElse(null);
		
		return e;
	}
	/*@Override
	public void addAndassignEventCategorie(Event e, String label) {

	     CategorieEvent c =  CategorieEventRepository.findByLabel(label).orElse(null);
		//System.out.println(p);
		e.setCategorieEvent(c);
		//System.out.println(v);
		ER.save(e);
	}*/


	@Override
	public List<Event> findByName(String nom) {
		return ER.findEventByName(nom);
	}
	
	@Override
	public List<Event> trie(){
		return ER.tri();
	}


	@Override
	public int getInscription(Event e) {
		
		return e.getNbrInscri();
	}

	

}
