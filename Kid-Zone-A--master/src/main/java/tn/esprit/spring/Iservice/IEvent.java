package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.Event;



public interface IEvent {
	List<Event> retrieveAllEvents();
	Event addEvent (Event e);
	Event updateEvent (Event e);
    void deleteEvent(Long id);
    Event getEventById(Long id);
	//void addAndassignEventCategorie(Event e, String label);
    List<Event>findByName(String nom);
    public List<Event> trie();
    public int getInscription(Event e);
}
