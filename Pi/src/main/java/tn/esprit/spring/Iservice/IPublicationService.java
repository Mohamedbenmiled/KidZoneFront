package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.Publication;

public interface IPublicationService {
	
	Publication addPublication(Publication p);
	 List<Publication> retreiveAllPublication();
	 void deletePublication(long id);
	 Publication updatePublication (Publication p);
	 Publication getPublicationById( long id);
}
