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

import tn.esprit.spring.Iservice.IEvent;
import tn.esprit.spring.entity.Event;
import tn.esprit.spring.service.EventService;
@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/event")
public class EventController {
 
	
	@Autowired
	IEvent IE;
	
	@GetMapping("/all-events")
	@ResponseBody
	public List<Event> getEvents() {
		List<Event> list = IE.retrieveAllEvents();
		return list;
	}
	
	@PostMapping("/add-event")
	@ResponseBody
	public Event addEvent(@RequestBody Event e) {
		Event event = IE.addEvent(e);
		return event;
		}
	
	@DeleteMapping("/remove-event/{event-id}")
	@ResponseBody
	public void deleteEvent(@PathVariable("event-id") Long idEvent) {
		IE.deleteEvent(idEvent);
	}
	
	@PutMapping("/modify-event")
	@ResponseBody
	public Event modifyEvent(@RequestBody Event event) {
		return IE.updateEvent(event);
	}
	
	@GetMapping("/retrieve-event/{event-id}")
	@ResponseBody
	public Event retrieveEvent(@PathVariable("event-id") Long idEvent) {
		return IE.getEventById(idEvent);
	}
	/*@PostMapping("/Assgin-event/{categorie-event-nom}")
	@ResponseBody
	public void addAndassignEventCategorie(@RequestBody Event e ,@PathVariable("categorie-event-nom")  String nom )
	{
		
	EventService eventService = new EventService();
	eventService.addAndassignEventCategorie(e, label);
	System.out.println("+++++++++++++++++++++");
	}
	*/
	@GetMapping("/find-eventByNom/{event-nom}")
	public List <Event> retrieveTransporteurByNom(@PathVariable("event-nom") String name) {
		return IE.findByName(name);
	}
	@GetMapping("/tri-event")
	public List<Event> tri(){
		return IE.trie();
	}
	
	@GetMapping("/getNbiscri/{id}")
	public int getNbInscri(@PathVariable("id") Long id)
	{
		Event e=this.IE.getEventById(id);
		return this.IE.getInscription(e);
	}
}
