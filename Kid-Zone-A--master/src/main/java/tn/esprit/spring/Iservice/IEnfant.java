package tn.esprit.spring.Iservice;


import java.util.List;




import tn.esprit.spring.entity.Enfants;

public interface IEnfant {
	 Enfants addEnfant(Enfants e);
	 List<Enfants> retreiveAllEnfant();
	 void deleteEnfant(Long id);
	 Enfants updateEnfant (Enfants e);
	 Enfants getEnfantById( Long id);
	 public List<Enfants> getNomAsc();
	 public List<Enfants> getNomDesc();
	 List<Enfants>rechercheEnfant(String nom);

	 

}
