package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.Reclamation;

public interface IReclamationService {
	List<Reclamation> retrieveAllReclamations();
	
	Reclamation addReclamation(Reclamation rec,Long id,Long IdUser);
	
	Reclamation updateReclamation(Reclamation rec,Long id,Long IdUser);
	
	Reclamation retrieveReclamation(Reclamation rec,Long id,Long IdUser);
	
	void removeReclamation(Long id);

	}
