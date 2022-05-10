package tn.esprit.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.Iservice.IEvent;
import tn.esprit.spring.repository.EventRepository;
@Service
public class EventService implements IEvent {
	@Autowired
	EventRepository ER;

}
