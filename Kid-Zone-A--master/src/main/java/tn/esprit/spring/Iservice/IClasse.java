package tn.esprit.spring.Iservice;

import java.io.UnsupportedEncodingException;
import java.util.List;



import tn.esprit.spring.entity.Classe;

public interface IClasse {
	 Classe addClasse(Classe c) ;
	 List<Classe> retreiveAllClasse();
	 void deleteClasse(Long id);
	 Classe updateClasse (Classe c);
	 Classe getClasseById( Long id);
	  List<Classe> getAllClasseLabel();
	  public List<Classe> getLabelDesc();
	  List<Classe>rechercheClasse(String label);
	  
		       

}
