package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.Rendezvous;

public interface IRendezVousService {
	List<Rendezvous> retrieveAllRendezvouss();
	
	Rendezvous addRendezvous(Rendezvous rdv,Long id,Long IdUser);
	
	Rendezvous updateRendezvous(Rendezvous rdv,Long id,Long IdUser);
	
	Rendezvous retrieveRendezvous(Rendezvous rdv,Long id,Long IdUser);
	
	void removeRendezvous(Long id);

	}