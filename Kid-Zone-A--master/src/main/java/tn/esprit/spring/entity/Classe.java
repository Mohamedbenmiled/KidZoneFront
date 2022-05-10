package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name="Classe")
public class Classe implements Serializable {
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="idClasse")
	private long idClasse ; 
	
	@Column(name="label")
	private String label ; 
	
	@Column(name="Enfants")
	@JsonIgnore
	@OneToMany (mappedBy="classe")
	private Set<Enfants> enfants ;
	@Column(name="Employe")

	@JsonIgnore
	@OneToMany(mappedBy="classe")
	private Set<Employe> employe ;
	@Column(name="Jardin")
	
	//@ManyToOne(cascade = CascadeType.ALL)
	private User jardin ;


}
