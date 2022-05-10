package tn.esprit.spring.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name="Publication")
public class Publication  implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="idPost")

	private int idPost  ; 
	
	@Column(name="Contenue")

	private String contenue ; 
	@Column(name="Commentaire")

	private String commentaire ; 
	@Column(name="Interraction")

	private Boolean interraction ;
	@Column(name="Image")

	private String image ;
	
	//@Column(name="CategoriePublication")

	@ManyToOne ( cascade = CascadeType.ALL)
	private CategoriePost categoriePublication ;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private User user ;
	

}
